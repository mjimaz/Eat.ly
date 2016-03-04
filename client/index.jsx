import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer.jsx';
import foodAppHandler from './reducers/index.jsx'
import { Provider } from 'react-redux';
import { createStore, getState, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ReduxPromise from 'redux-promise'

let store = createStore(foodAppHandler, applyMiddleware(ReduxPromise, logger()));

// window.getState = store.getState

ReactDOM.render(
	<Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
