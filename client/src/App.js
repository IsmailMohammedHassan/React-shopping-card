import React, { useEffect, useState } from "react";
import Card from "./Components/Card/Card";
import Filter from "./Components/Filter/Filter";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import data from "./data.json";
import { Provider } from "react-redux";
import store from "./Store/Store";

function App() {
  const [products, setProducts] = useState(data);

  // const [cardItems, setCardItems] = useState(
  //   JSON.parse(localStorage.getItem("Card-Items")) || []
  // );

  // const addToCard = (product) => {
  //   const cardItemsClone = [...cardItems];
  //   let isProductExist = false;
  //   cardItemsClone.forEach((prod) => {
  //     if (prod.id == product.id) {
  //       prod.qty++;
  //       isProductExist = true;
  //     }
  //   });
  //   if (!isProductExist) {
  //     cardItemsClone.push({ ...product, qty: 1 });
  //   }
  //   setCardItems(cardItemsClone);
  // };

  // const removeFromCard = (product) => {
  //   const cardItemsClone = [...cardItems];
  //   setCardItems(cardItemsClone.filter((prod) => prod.id != product.id));
  // };

  // useEffect(() => {
  //   localStorage.setItem("Card-Items", JSON.stringify(cardItems));
  // }, [cardItems]);

  return (
    <Provider store={store}>
      <div className="layout">
        <Header />

        <main>
          <div className="wrapper">
            <Products products={products} />
            <Filter />
          </div>

          <Card />
        </main>

        <Footer />
      </div>
    </Provider>
  );
}

export default App;
