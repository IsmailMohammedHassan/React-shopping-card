import { FETCH_PRODUCTS } from "../Actions/types";

export const ProductReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { products: action.data };

    default:
      return state;
  }
};
