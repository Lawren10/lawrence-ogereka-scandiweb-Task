import React, { Component } from "react";
import Navcomp from "./components/Nav/Navcomp";
import Category from "./components/Category";
import { Routes, Route } from "react-router-dom";
import ShopCart from "./components/ShopCart";

export class App extends Component {
  render() {
    return (
      <>
        <div>
          <Navcomp />
          <Routes>
            <Route path="/" element={<Category />} />
            <Route path="/cart" element={<ShopCart />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
