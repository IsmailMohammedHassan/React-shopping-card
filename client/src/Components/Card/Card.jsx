import React from "react";
import "../../css/Card/Card.css";

export default function Card({ cardItems, removeFromCard }) {
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
    </div>
  );
}
