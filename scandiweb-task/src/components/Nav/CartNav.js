import React, { Component } from "react";
import {
  CartBtn,
  CartList,
  CartCount,
  CartOverLay,
  MiniCartMessage,
} from "../../styled-compomets/Navcomp-styles";
import { ShopLink } from "../../styled-compomets/Global-style-theme";
import { connect } from "react-redux";
import { getCurrencies } from "../../redux/asyncQueries";
import { BsCart2 } from "react-icons/bs";
import MiniCart from "../shopcart/Minicart";
import { Action } from "../../redux/storereducer";

let { setShowCartOverlay, setShowCurrencyList } = Action;

export class Cart extends Component {
  handleMouseEnter = (e) => {
    if (this.props.showCurrencyList === true) {
      this.props.setShowCurrencyList();
    }
    if (this.props.showCartOverlay === false) {
      this.props.setShowCartOverlay();
    }
  };
  render() {
    let { itemsInCart, cart } = this.props;
    let val = Object.keys(cart).length;

    return (
      <div>
        <CartBtn
          onMouseEnter={(e) => {
            this.handleMouseEnter(e);
          }}
        >
          <ShopLink to="/cart">
            <i>
              <BsCart2 style={{ fontSize: "1.2rem" }} />
            </i>
            <CartCount>{itemsInCart}</CartCount>
          </ShopLink>
          <CartList show={this.props.showCartOverlay}>
            {val === 0 ? (
              <MiniCartMessage id="mini">
                <h1>Sorry Your Cart Is Empty</h1>
              </MiniCartMessage>
            ) : (
              <MiniCart />
            )}
          </CartList>
          <CartOverLay show={this.props.showCartOverlay} />
        </CartBtn>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let { Currencies, itemsInCart, cart, showCartOverlay, showCurrencyList } =
    state.shop;
  return {
    currencies: Currencies,
    itemsInCart,
    cart,
    showCartOverlay,
    showCurrencyList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrencies: () => {
      dispatch(getCurrencies());
    },
    setShowCartOverlay: () => {
      dispatch(setShowCartOverlay());
    },
    setShowCurrencyList: () => {
      dispatch(setShowCurrencyList());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
