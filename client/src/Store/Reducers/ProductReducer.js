import { FETCH_PRODUCTS, FILTER_COLOR, FILTER_SORT } from "../Actions/types";

export const ProductReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { products: action.data, filterProducts: action.data };

    case FILTER_COLOR:
      return {
        ...state,
        color: action.data.color,
        filterProducts: action.data.products,
      };

    case FILTER_SORT:
      return {
        ...state,
        sort: action.data.sort,
        filterProducts: action.data.products,
      };

    default:
      return state;
  }
};
