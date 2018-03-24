import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import apiMiddleware from 'redux-devise-axios';
import rootReducer from './reducers/index';
import axios from 'axios';
import { cartReducer } from 'react-redux-shopping-cart';

const options = { axios };

const rootReducer = () =>
  combineReducers({
    //other reducers
    cart: cartReducer,
  });

const store = createStore(
  rootReducer(),
  //middleware and enchancer composition
  ,
);

const enhancers = compose(
  applyMiddleware(thunk, apiMiddleware(options)),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, {}, enhancers);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
