import React from "react";
import Card from "../Components/Card/Card";
import Filter from "../Components/Filter/Filter";
import Products from "../Components/Products/Products";

export default function () {
  return (
    <>
      <div className="wrapper">
        <Products />
        <Filter />
      </div>

      <Card />
    </>
  );
}
