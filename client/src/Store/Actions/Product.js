import { FETCH_PRODUCTS, FILTER_COLOR, FILTER_SORT } from "./types";

export const fetchProducts = () => {
  return (dispatch) => {
    fetch("/home/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_PRODUCTS,
          data: data,
        });
      });
  };
};

export const filterByColor = (product, value) => {
  return (dispatch) => {
    let productClone = [...product];
    let newProducts = productClone.filter(
      (prod) => prod.color.indexOf(value) != -1
    );
    dispatch({
      type: FILTER_COLOR,
      data: {
        color: value,
        products: value == "ALL" ? product : newProducts,
      },
    });
  };
};

export const filterByOrder = (products, value) => {
  return (dispatch) => {
    let productsClone = [...products];
    let newProducts = productsClone.sort(function (first, second) {
      if (value == "lowest") {
        return first.price - second.price;
      } else if (value == "highest") {
        return second.price - first.price;
      } else {
        return first.id < second.id ? 1 : -1;
      }
    });
    dispatch({
      type: FILTER_SORT,
      data: {
        sort: value,
        products: newProducts,
      },
    });
  };
};
