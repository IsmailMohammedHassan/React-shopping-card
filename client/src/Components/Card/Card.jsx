import React, { useState } from "react";
import "../../css/Card/Card.css";
import Checkout from "../Checkout-Form/Checkout";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import { removeCard } from "../../Store/Actions/Cart";
import CardModal from "./CardModal/CardModal";

function Card(props) {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");
  const [order, setOrder] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    const order = {
      name: value.name,
      email: value.email,
    };
    setOrder(order);
  };

  const closeModal = () => {
    setOrder(false);
  };

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {props.cartItems && props.cartItems.length === 0 ? (
          "Card is empty"
        ) : (
          <p>
            There is {props.cartItems && props.cartItems.length} product in card
          </p>
        )}
      </div>

      <Fade right cascade>
        <div className="cart-items">
          {props.cartItems &&
            props.cartItems.map((item) => (
              <div className="cart-item" key={item._id}>
                <img src={item.imageUrl} alt="" />
                <div className="cart-info">
                  <div>
                    <p>Product name: {item.title}</p>
                    <p>Quantity: {item.qty}</p>
                    <p>Product Price: ${item.price}</p>
                  </div>
                  <button
                    onClick={() => props.removeCard(item)}
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
        </div>
      </Fade>
      {props.cartItems && props.cartItems.length != 0 && (
        <section className="cart-total-price">
          <p className="text-info bg-dark">
            Total: $
            {props.cartItems.reduce((acc, p) => {
              return acc + p.price;
            }, 0)}
          </p>
          <button onClick={() => setShowForm(true)} className="btn btn-success">
            {" "}
            Select Product
          </button>
        </section>
      )}
      <Checkout
        showForm={showForm}
        setShowForm={setShowForm}
        submitForm={submitForm}
        handleChange={handleChange}
      />

      <CardModal
        order={order}
        cartItems={props.cartItems}
        closeModal={closeModal}
      />
    </div>
  );
}

export default connect(
  (state) => {
    return {
      cartItems: state.cart.cartItems,
    };
  },
  { removeCard }
)(Card);
