import { createStore, compose, applyMiddleware } from 'redux';

import reducers from './ducks';

import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
        reducers,
        compose(
            applyMiddleware(sagaMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f // adding support for Redux dev tools
        )
    );

sagaMiddleware.run(rootSaga);

export default store;