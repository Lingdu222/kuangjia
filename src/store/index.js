import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';

export default function storeFactory(initialState) {
    return (rootReducer, rootSaga) => {
        const sagaMiddleware = createSagaMiddleware();
        const store = createStore(rootReducer, initialState, compose(
            applyMiddleware(thunk),
            applyMiddleware(sagaMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ));
        sagaMiddleware.run(saga(rootSaga));
        return store;
    };
}
