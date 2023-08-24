import { combineReducers } from 'redux';
import baseReducer from './base';
import storeReducer from './store';

const reducer = combineReducers({
  store: storeReducer,
  base: baseReducer,
});

export default reducer;
