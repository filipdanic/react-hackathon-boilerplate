import { createStore, compose, combineReducers } from 'redux';
import globalState from './globalReducer';

const rootReducer = combineReducers({
  globalState,
});

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default (initialState) => {
  return createStore(rootReducer, initialState, enhancers);
};
