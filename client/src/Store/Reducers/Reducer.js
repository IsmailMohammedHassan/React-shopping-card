import { combineReducers } from "redux";
import { cartReducer } from "./CartReducer";
import { orderReducer } from "./orderReducer";
import { ProductReducer } from "./ProductReducer";

export default combineReducers({
  Products: ProductReducer,
  cart: cartReducer,
  order: orderReducer,
});
