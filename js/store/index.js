import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from '../reducers';

type GlobalStateType = {
};

const globalState: StateType = {
};

const allReducers = Object.keys(reducers)
  .map(name => reducers[name]);

export default () => {
  const store = createStore(combineReducers(allReducers)/*, {}, applyMiddleware()*/)
  return store;
};