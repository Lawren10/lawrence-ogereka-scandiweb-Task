import React, { Component } from "react";
import {
  CartBtn,
  CartList,
  CartCount,
} from "../../styled-compomets/Navcomp-styles";
import { ShopLink } from "../../styled-compomets/Global-style-theme";
import { connect } from "react-redux";
import { getCurrencies } from "../../redux/asyncQueries";
export class Cart extends Component {
  render() {
    return (
      <div>
        <CartBtn>
          <ShopLink to="/cart">
            <i>Cart</i>
            <CartCount>0</CartCount>
          </ShopLink>
          <CartList />
        </CartBtn>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let { Currencies } = state.shop;
  return {
    currencies: Currencies,
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
