import React from "react";
import "../../css/Products/Products.css";

export default function Products({ products }) {
  console.log(products);
  return (
    <div className="products-wrapper">
      {products.map((prod) => (
        <div key={prod.id} className="product-item">
          <img src={prod.imageUrl} alt={prod.title} />
          <div className="product-desc">
            <p>{prod.title}</p>
            <span>{prod.price}</span>
          </div>
          <button>Add to card</button>
        </div>
      ))}
    </div>
  );
}
