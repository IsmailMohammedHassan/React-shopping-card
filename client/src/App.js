import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Provider } from "react-redux";
import store from "./Store/Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Orders from "./Pages/Orders";
import NewNavbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="layout">
          <Header />

          <main>
            <NewNavbar />

            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/orders" element={<Orders />} exact />
            </Routes>
          </main>
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
