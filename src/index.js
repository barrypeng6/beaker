import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers( applyMiddleware(thunk) )
);

ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
);
