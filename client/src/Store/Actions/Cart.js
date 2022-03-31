import { ADD_CART, REMOVE_CART } from "./types";

export const addToCart = (product) => {
  return (dispatch, getState) => {
    const cartItems = getState().cart.cartItems;
    const cardItemsClone = [...cartItems];
    let isProductExist = false;
    cardItemsClone.forEach((prod) => {
      if (prod._id == product._id) {
        prod.qty++;
        isProductExist = true;
      }
    });
    if (!isProductExist) {
      cardItemsClone.push({ ...product, qty: 1 });
    }

    dispatch({
      type: ADD_CART,
      data: {
        cartItems: cardItemsClone,
      },
    });
    localStorage.setItem("Card-Items", JSON.stringify(cardItemsClone));
  };
};

export const removeCard = (product) => {
  return (dispatch, getState) => {
    const cartItems = getState().cart.cartItems;
    const cartItemsClone = [...cartItems];
    const updatedCartItems = cartItemsClone.filter(
      (p) => p._id !== product._id
    );
    dispatch({
      type: REMOVE_CART,
      data: {
        cartItems: updatedCartItems,
      },
    });
    localStorage.setItem("Card-Items", JSON.stringify(updatedCartItems));
  };
};
