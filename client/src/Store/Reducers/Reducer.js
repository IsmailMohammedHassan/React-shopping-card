import { combineReducers } from "redux";
import { cartReducer } from "./CartReducer";
import { ProductReducer } from "./ProductReducer";

export default combineReducers({
  Products: ProductReducer,
  cart: cartReducer,
});
