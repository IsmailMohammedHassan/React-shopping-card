import React, { useState } from "react";
import Modal from "react-modal";

export default function ProductModal({ product, closeModal }) {
  return (
    <Modal isOpen={product} onRequestClose={closeModal}>
      <span className="close-icon" onClick={closeModal}>
        &times;
      </span>
      <div className="prod-info">
        <img src={product.imageUrl} alt={product.title} />
        <p>
          Name: <span> {product.title}</span>
        </p>
        <p>
          Details: <span>{product.disc}</span>
        </p>

        <p>
          Price: <span> {product.price}$</span>
        </p>
      </div>
    </Modal>
  );
}
