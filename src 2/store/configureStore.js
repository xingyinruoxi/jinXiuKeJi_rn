import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';//引入异步操作
import reducer from './reducers';//引入所有的reducers
import {composeWithDevTools} from 'remote-redux-devtools'
const store = function () {
    if (process.env.NODE_ENV === 'production') {
        let store = createStore(
            reducer,
            compose(
                applyMiddleware(thunk),
            )
        );
        //对自己所做的项目技术严格要求、减少bug数，提高工作效率，同时在工项目中不断提高和充实自己相关技术
        if (module.hot) {
            // Enable Webpack hot module replacement for reducers
            module.hot.accept('./reducers', () => {
                store.replaceReducer(reducer);
            });
        }
        return store;
    } else {
        return createStore(
            reducer,
            compose(
                composeWithDevTools(applyMiddleware(thunk))
            )
        );
    }
}();

export {store};

