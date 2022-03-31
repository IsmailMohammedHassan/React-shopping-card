import { ADD_CART, REMOVE_CART } from "../Actions/types";

export const cartReducer = (
  state = { cartItems: JSON.parse(localStorage.getItem("Card-Items")) || [] },
  action
) => {
  switch (action.type) {
    case ADD_CART:
      return {
        cartItems: action.data.cartItems,
      };

    case REMOVE_CART:
      return {
        cartItems: action.data.cartItems,
      };
    default:
      return state;
  }
};
