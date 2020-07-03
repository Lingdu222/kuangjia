import qs from 'qs';

const Fetch = {};

Fetch.get = resource => fetch(
    _.trim(`${resource.url}?${_.map(resource.params, (v, k) => `${k}=${v}`).join('&')}`, '&'), {
        credentials: 'include'
    }
);

Fetch.postform = resource => fetch(resource.url, {
    method: 'post',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: qs.stringify(resource.params)
});

Fetch.postjson = resource => fetch(resource.url, {
    method: 'post',
    credentials: 'include',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(resource.params)
});

Fetch.postfile = (resource) => {
    const formData = new FormData();
    _.map(resource.params, (item, key) => formData.append(key, item));
    return fetch(resource.url, {
        method: 'post',
        credentials: 'include',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: formData
    });
};

Fetch.put = resource => fetch(resource.url, {
    method: 'put',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    credentials: 'same-origin',
    body: JSON.stringify(resource.params)
});

Fetch.delete = resource => fetch(resource.url, {
    method: 'delete',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    credentials: 'same-origin',
    body: JSON.stringify(resource.params)
});

export default Fetch;
