import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeEnhancers( applyMiddleware(sagaMiddleware) )
);

sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
);
