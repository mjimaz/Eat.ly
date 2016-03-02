import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer.jsx';
import foodAppHandler from './reducers/index.jsx'
import { Provider } from 'react-redux';
import { createStore, getState, applyMiddleware } from 'redux';
import logger from 'redux-logger';

let store = createStore(foodAppHandler, applyMiddleware(logger()));

// window.getState = store.getState

ReactDOM.render(
	<Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
