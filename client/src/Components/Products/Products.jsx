import React, { useState } from "react";
import "../../css/Products/Products.css";
import ProductModal from "./ProductModal/ProductModal";

export default function Products({ products, addToCard }) {
  const [product, setProduct] = useState("");

  const openModal = (prod) => {
    setProduct(prod);
  };
  const closeModal = () => {
    setProduct(false);
  };

  return (
    <div className="products-wrapper">
      {products.map((prod) => (
        <div key={prod.id} className="product-item">
          <a href="#" onClick={() => openModal(prod)}>
            <img src={prod.imageUrl} alt={prod.title} />
          </a>
          <div className="product-desc">
            <p>{prod.title}</p>
            <p>{prod.price}</p>
          </div>
          <button onClick={() => addToCard(prod)} className="Btn">
            Add to card
          </button>
        </div>
      ))}
      <ProductModal product={product} closeModal={closeModal} />
    </div>
  );
}
