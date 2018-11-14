import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { watchFetchProjects } from './sagas/index';

import reducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchFetchProjects);

export default store;