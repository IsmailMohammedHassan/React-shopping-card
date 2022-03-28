import React, { useState } from "react";
import "../../css/Card/Card.css";
import Checkout from "../Checkout-Form/Checkout";

export default function Card({ cardItems, removeFromCard }) {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const order = {
      name: value.name,
      email: value.email,
    };
    console.log(order);
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {cardItems.length === 0 ? (
          "Card is empty"
        ) : (
          <p>There is {cardItems.length} product in card</p>
        )}
      </div>
      <div className="cart-items">
        {cardItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.imageUrl} alt="" />
            <div className="cart-info">
              <div>
                <p>Product name: {item.title}</p>
                <p>Quantity: {item.qty}</p>
                <p>Product Price: ${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCard(item)}
                className="btn btn-danger"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      {cardItems.length != 0 && (
        <section className="cart-total-price">
          <p className="text-info bg-dark">
            Total: $
            {cardItems.reduce((acc, p) => {
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
    </div>
  );
}
