import { CLEAR_CARD, CLEAR_ORDER, CREATE_ORDER } from "./types";

export const createOrder = (order) => {
  return (dispatch) => {
    fetch("/home/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: CREATE_ORDER,
          data: {
            order: data,
          },
        });
      });

    dispatch({
      type: CLEAR_CARD,
    });
    localStorage.clear("Card-Items");
  };
};

export const clearOrder = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_ORDER,
    });
  };
};
