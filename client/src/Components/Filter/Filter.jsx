import React from "react";
import Form from "react-bootstrap/Form";
import "../../css/Filter/Filter.css";
import Pulse from "react-reveal/Pulse";
import { connect } from "react-redux";
import { filterByColor, filterByOrder } from "../../Store/Actions/Product";

function Filter(props) {
  return (
    <Pulse>
      {props.filterProducts && (
        <div className="filter-wrapper">
          <h2 className="filter-title">Filter</h2>
          <div className="num-of-products">
            Available {props.filterProducts.length} items
          </div>
          <div className="filter-by-size">
            <span>Filter</span>
            <Form.Select
              value={props.colors}
              aria-label="Default select example"
              onChange={(e) =>
                props.filterByColor(props.products, e.target.value)
              }
            >
              <option value="ALL">All</option>
              <option value="white">white</option>
              <option value="black">black</option>
              <option value="Blue Grey">Blue Grey</option>
              <option value="yellow">yellow</option>
              <option value="orange">orange</option>
              <option value="Green">Green</option>
            </Form.Select>
          </div>
          <div className="filter-by-size">
            <span>Order</span>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) =>
                props.filterByOrder(props.filterProducts, e.target.value)
              }
              value={props.sort}
            >
              <option value="latest">Latest</option>
              <option value="lowest">lowest</option>
              <option value="highest">Highest</option>
            </Form.Select>
          </div>
        </div>
      )}
    </Pulse>
  );
}

export default connect(
  (state) => {
    return {
      sort: state.Products.sort,
      color: state.Products.color,
      products: state.Products.products,
      filterProducts: state.Products.filterProducts,
    };
  },
  { filterByColor, filterByOrder }
)(Filter);
