import React, { useEffect, useState } from "react";
import "../../css/Products/Products.css";
import ProductModal from "./ProductModal/ProductModal";
import Zoom from "react-reveal/Zoom";
import { connect } from "react-redux";
import { fetchProducts } from "../../Store/Actions/Product";
import { addToCart } from "../../Store/Actions/Cart";

function Products(props) {
  const [product, setProduct] = useState("");

  const openModal = (prod) => {
    setProduct(prod);
  };
  const closeModal = () => {
    setProduct(false);
  };

  useEffect(() => {
    props.fetchProducts();
  }, []);

  return (
    <Zoom cascade>
      <div className="products-wrapper">
        {props.products && props.products.length
          ? props.products.map((prod) => (
              <div key={prod._id} className="product-item">
                <a href="#" onClick={() => openModal(prod)}>
                  <img src={prod.imageUrl} alt={prod.title} />
                </a>
                <div className="product-desc" key={prod.id}>
                  <p>{prod.title}</p>
                  <p>{prod.price}</p>
                </div>
                <button onClick={() => props.addToCart(prod)} className="Btn">
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
      products: state.Products.filterProducts,
    };
  },
  { fetchProducts, addToCart }
)(Products);
