import React, { Component } from "react";
import Navcomp from "./components/Nav/Navcomp";
import Category from "./components/Category";
import { Routes, Route } from "react-router-dom";
import ShopCart from "./components/shopcart/ShopCart";
import ProductDisplay from "./components/productDisplay/ProductDisplay";
import { connect } from "react-redux";
import { Action } from "./redux/storereducer";

const { setShowCurrencyList, setShowCartOverlay } = Action;

export class App extends Component {
  handleClick = (e) => {
    if (e.target.getAttribute("id") === "mini") {
      return;
    }
    let itemId = e.target.id;
    if (this.props.showCartOverlay === true) {
      this.props.setShowCartOverlay();
    }
    if (
      itemId === "$" ||
      itemId === "A$" ||
      itemId === "£" ||
      itemId === "¥" ||
      itemId === "₽"
    ) {
      return;
    }

    if (itemId === "currencyBtn" && this.props.showCurrencyList === false) {
      this.props.setShowCurrencyList();
    }

    if (this.props.showCurrencyList === true) {
      this.props.setShowCurrencyList();
    }
  };
  render() {
    return (
      <>
        <div
          onClick={(e) => {
            this.handleClick(e);
          }}
        >
          <Navcomp />
          <Routes>
            <Route path="/" element={<Category />} />
            <Route path="/:name" element={<Category />} />
            <Route path="/cart" element={<ShopCart />} />
            <Route path="/product/:id" element={<ProductDisplay />} />
          </Routes>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  let { showCurrencyList, showCartOverlay } = state.shop;
  return {
    showCurrencyList,
    showCartOverlay,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShowCurrencyList: () => {
      dispatch(setShowCurrencyList());
    },
    setShowCartOverlay: () => {
      dispatch(setShowCartOverlay());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
