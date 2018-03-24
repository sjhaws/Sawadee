import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import { cartReducer } from 'react-redux-shopping-cart';

const rootReducer = combineReducers({
  user,
  flash,
  cart: cartReducer,
});

export default rootReducer;
