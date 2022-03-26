import React from "react";
import Form from "react-bootstrap/Form";
import "../../css/Filter/Filter.css";

export default function Filter({ filterByColor, colors, filterByOrder, sort }) {
  return (
    <div className="filter-wrapper">
      <h2 className="filter-title">Filter</h2>
      <div className="num-of-products">4</div>
      <div className="filter-by-size">
        <span>Filter</span>
        <Form.Select
          value={colors}
          aria-label="Default select example"
          onChange={filterByColor}
        >
          <option value="ALL">ALL</option>
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
          onChange={filterByOrder}
          value={sort}
        >
          <option value="latest">Latest</option>
          <option value="lowest">lowest</option>
          <option value="highest">Highest</option>
        </Form.Select>
      </div>
    </div>
  );
}
