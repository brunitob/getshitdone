import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';
import {persistStore, autoRehydrate} from 'redux-persist'

let store = compose(
  applyMiddleware(),
  autoRehydrate()
)(createStore)(reducers);

persistStore(store, {blacklist: ['routing']});


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
