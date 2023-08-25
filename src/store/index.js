import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import reducer from './reducer/index';

//根据不同环境，使用不同中间件

let middleware = [reduxPromise, reduxThunk],
  env = process.env.NODE_ENV;

if (env === 'development') {
  middleware.push(reduxLogger);
}

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
