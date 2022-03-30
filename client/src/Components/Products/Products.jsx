import React, { useEffect, useState } from "react";
import "../../css/Products/Products.css";
import ProductModal from "./ProductModal/ProductModal";
import Zoom from "react-reveal/Zoom";
import { connect } from "react-redux";
import { fetchProducts } from "../../Store/Actions/Product";

function Products({ products, addToCard, fetchProducts }) {
  const [product, setProduct] = useState("");

  const openModal = (prod) => {
    setProduct(prod);
  };
  const closeModal = () => {
    setProduct(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Zoom cascade>
      <div className="products-wrapper">
        {products && products.length
          ? products.map((prod) => (
              <div key={prod.id} className="product-item">
                <a href="#" onClick={() => openModal(prod)}>
                  <img src={prod.imageUrl} alt={prod.title} />
                </a>
                <div className="product-desc" key={prod.id}>
                  <p>{prod.title}</p>
                  <p>{prod.price}</p>
                </div>
                <button onClick={() => addToCard(prod)} className="Btn">
                  Add to card
                </button>
              </div>
            ))
          : "Loading...."}
        <ProductModal product={product} closeModal={closeModal} />
      </div>
    </Zoom>
  );
}

export default connect(
  (state) => {
    return {
      products: state.Products.products,
    };
  },
  { fetchProducts }
)(Products);
