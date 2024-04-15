import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import {rootReducer} from "./rootReducer";
import rootSaga from "./saga";
import {PostsState} from "./ducks/posts/contracts/state";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers =
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const sagaMiddleware = createSagaMiddleware() //создать сагу

export interface RootState {
    posts: PostsState
}



// @ts-ignore
export const store = createStore<RootState>(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware))) //прикрутить к хранилищу сторы

sagaMiddleware.run(rootSaga)


