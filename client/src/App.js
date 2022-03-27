import React, { useEffect, useState } from "react";
import Card from "./Components/Card/Card";
import Filter from "./Components/Filter/Filter";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import data from "./data.json";

function App() {
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState("");
  const [colors, setColors] = useState("");
  const [cardItems, setCardItems] = useState(
    JSON.parse(localStorage.getItem("Card-Items")) || []
  );

  const filterByColor = (e) => {
    setColors(e.target.value);
    if (e.target.value == "ALL") {
      setProducts(data);
    } else {
      let productsClone = [...data];
      let newProducts = productsClone.filter(
        (prod) => prod.color.indexOf(e.target.value) != -1
      );
      setProducts(newProducts);
    }
  };

  const filterByOrder = (e) => {
    let order = e.target.value;
    setSort(order);
    let productsClone = [...products];
    let newProducts = productsClone.sort(function (first, second) {
      if (order == "lowest") {
        return first.price - second.price;
      } else if (order == "highest") {
        return second.price - first.price;
      } else {
        return first.id < second.id ? 1 : -1;
      }
    });
    setProducts(newProducts);
  };

  const addToCard = (product) => {
    const cardItemsClone = [...cardItems];
    let isProductExist = false;
    cardItemsClone.forEach((prod) => {
      if (prod.id == product.id) {
        prod.qty++;
        isProductExist = true;
      }
    });
    if (!isProductExist) {
      cardItemsClone.push({ ...product, qty: 1 });
    }
    setCardItems(cardItemsClone);
  };

  const removeFromCard = (product) => {
    const cardItemsClone = [...cardItems];
    setCardItems(cardItemsClone.filter((prod) => prod.id != product.id));
  };

  useEffect(() => {
    localStorage.setItem("Card-Items", JSON.stringify(cardItems));
  }, [cardItems]);

  return (
    <div className="layout">
      <Header />

      <main>
        <div className="wrapper">
          <Products products={products} addToCard={addToCard} />
          <Filter
            filterByColor={filterByColor}
            colors={colors}
            filterByOrder={filterByOrder}
            sort={sort}
            productsNumber={products.length}
          />
        </div>

        <Card cardItems={cardItems} removeFromCard={removeFromCard} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
