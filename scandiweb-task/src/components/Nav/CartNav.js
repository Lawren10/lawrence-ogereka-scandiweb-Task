import React, { Component } from "react";
import {
  CartBtn,
  CartList,
  CartCount,
  CartOverLay,
} from "../../styled-compomets/Navcomp-styles";
import { ShopLink } from "../../styled-compomets/Global-style-theme";
import { connect } from "react-redux";
import { getCurrencies } from "../../redux/asyncQueries";
import { BsCart2 } from "react-icons/bs";
import MiniCart from "../shopcart/Minicart";

export class Cart extends Component {
  render() {
    let { itemsInCart, cart } = this.props;
    let val = Object.keys(cart).length;
    return (
      <div>
        <CartBtn>
          <ShopLink to="/cart">
            <i>
              <BsCart2 style={{ fontSize: "1.2rem" }} />
            </i>
            <CartCount>{itemsInCart}</CartCount>
          </ShopLink>
          <CartList>
            {val === 0 ? (
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "90%",
                  display: "grid",
                  placeContent: "center",
                }}
              >
                <h1>Sorry Your Cart Is Empty</h1>
              </div>
            ) : (
              <MiniCart />
            )}
          </CartList>
          <CartOverLay />
        </CartBtn>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let { Currencies, itemsInCart, cart } = state.shop;
  return {
    currencies: Currencies,
    itemsInCart,
    cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrencies: () => {
      dispatch(getCurrencies());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
