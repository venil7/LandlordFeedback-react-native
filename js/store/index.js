import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from '../reducers';

import firebase from '../firebase';

type GlobalStateType = {
};

const globalState: StateType = {
};

const middlewares = [thunk, createLogger()];

export default () => {
  const store = createStore(combineReducers(reducers), globalState, applyMiddleware(...middlewares));
  return store;
};