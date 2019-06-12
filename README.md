# mock平台前端

## 注意事项

1. 如何切换路由？
    > 请调用`@/containers/Layout/state/actions.js`里的changeNav方法

2. 如何开启mock模式？
    > `npm run dev --mock`，参考文档：[mockjs官网](http://mockjs.com/0.1/#)

3. 如何开启反向代理？
    > `npm run dev --proxy` 或 `npm run dev --proxy=dev`

4. 如何更改开发服务host？
    > `npm run dev --HOST=ip地址`

5. 线下如何打包？
    > `npm run build --offline`

6. 如何设置图片
    > `background-image: resolve("imgs/loading.gif");`

7. 命名规范
   * containers、components里的文件夹若默认输出为组件，则文件夹命名首字母大写
   * className 以 `mock-` 开头
   * ipt命名 以 `mockipt-` 开头

8. css使用规范
   > [cssnext官网](http://cssnext.io/features/)  
   > [less官网](http://lesscss.cn/)  
   > [ant-design默认主题](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)

   * 全局变量见`src/theme.less` 文件
   * 若想热更新，请将`src/theme.less`文件引入所开发的样式文件中

## 规范

### reducer 书写规范和注意事项

1. 每个reducer的state对象**至多2层**，超过三层请将reducer拆分，并通过combineReducer进行合并。
2. reducer的state请用immutable对象，使用参见官网[Imutable](https://facebook.github.io/immutable-js/docs/#/)
3. state需要多次更改请使用withMutations，如下

    ```js
    case 'SUCCESS_RCV_' + GET_LIST:
          return state.withMutations(s => s
            .set('data', action.payload.data || {})
            .set('filters', action.payload.filters || {})
          );
    ```

4. reducer函数必须指定默认返回
5. 请保持reducer的尽量纯净，仅是用来更新state，涉及ui的（比如成功时弹出消息），禁止掺杂其中！！！

### action 书写规范和注意事项

####（一）请求格式

* FETCH_TYPE可选值
  * GET
  * GETHTML
  * GETJSON
  * POST
    > 'Content-Type': 'application/x-www-form-urlencoded'
  * POSTFORM
   > 'Content-Type': 'application/x-www-form-urlencoded'
  * POSTJSON
   > 'Content-Type': 'application/json'
  * POSTFILE
   > 'Content-Type': 'multipart/form-data'
  * PUT
  * DELETE
* payload参数说明
  * url：请求的地址
  * params：请求的参数
  * message：请求成功弹出的消息内容，默认为不弹出消息
  * con：用来同时触发多请求
  * serial：用来触发序列请求，第一个成功才会触发第二个
  * race：延迟发请求，通过参数delay来设置延迟秒数
  * success：请求成功时的回调，可以是action对象，也可以是返回action对象的函数
  * failure：请求成功时的回调，可以是action对象，也可以是返回action对象的函数
* 单个请求示例

    ```js
    import { FETCH_TYPE } from 'CONST';
    export const addDidiTicket = params => (dispatch, getState) => {
    return dispatch({
        type:FETCH_TYPE.GET + GET_DIDITICKET_DETAIL,
        payload: {
            url: '/api/getDidiTicket/',
            params,
            message: '新增成功',
            //refreshList是刷新列表的请求
            success: payload => refreshList(payload.data.id)
            failure: {
                // 此type值仅为了举例，实际开发中不可省略文件前缀
                type: CLEAR_LIST,
                payload: {}
            }
        }
    })
    };
    ```

* 同时发起多个请求示例，序列请求类似

    ```js
    export const getDidiTicket = params => (dispatch, getState) => {
    return dispatch({
        type: FETCH_TYPE.GET + GET_DIDITICKET_DETAIL,
        payload: {
        con:[{
            url: '/api/getDidiTicket/',
            params,
            // 更改请求方式为post
            fetchType: 'POST'
        },{
            url: '/api/getDidiTicket2/',
            params
        }]
        }
    })
    };
    ```

* 延迟请求

    ```js
    export const getDidiTicket = params => (dispatch, getState) => {
    return dispatch({
        type: FETCH_TYPE.GET + GET_DIDITICKET_DETAIL,
        payload: {
        race:[{
            url: '/api/getDidiTicket/',
            params,
            delay: 1
        },{
            url: '/api/getDidiTicket2/',
            params,
            delay: 0
        }]
        }
    })
    };
    ```

(二） action对象格式

  ```js
  {
    /*
    * params: type
    *
    * 若是新模块，请首先在constant的actionTypes里新建文件，用来存actionTypes常量
    * 每个actionTypes常量的值，必须是【文件名_操作名】(全大写)
    * 如新建文件didiquan.js，文件内容如下
    * export const NEW = 'DIDIQUAN_NEW';
    */
    type:'DIDIQUAN_NEW',
    /*
    * params: payload
    *
    * 此参数用来存放需要修改的数据
    */
    payload: {}
  }
  ```
