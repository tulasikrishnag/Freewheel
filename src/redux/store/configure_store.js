import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from '../reducers/root_reducer.js';
import rootSaga from '../saga/root_saga';

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

const enhancers = composeWithDevTools(
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
  )

export const configureStore = () => {
    const store = createStore(rootReducer, enhancers);
    sagaMiddleware.run(rootSaga)

    return store;
}