import React, { Component } from "react";
import {
  Cart,
  CartHeader,
  CartItemsContainer,
  CartItem,
  TotalPriceWrap,
  CartPriceLabel,
  Cartvalue,
} from "../../styled-compomets/ShopCartStyles";

import { ProductAddToCartBtn } from "../../styled-compomets/productDisplayStyle";

import CartItemDetail from "./CartItemDetail";
import CartItemQuantity from "./CartItemQuantity";
import CartPictures from "./CartPictures";
import { connect } from "react-redux";

export class ShopCart extends Component {
  loop = (cartitem) => {
    let arry = [];
    for (let item in cartitem) {
      let {
        attributes,
        name,
        brand,
        id,
        price,
        quantity,
        gallery,
        selectedAttribute,
      } = cartitem[item];
      let { amount } = price;
      // console.log(cartitem[item]);
      arry.push(
        <CartItem key={item}>
          <CartItemDetail
            att={attributes}
            name={name}
            brand={brand}
            id={id}
            price={price}
            selectedAttribute={selectedAttribute}
          />
          <CartItemQuantity
            quantity={quantity}
            id={id}
            amount={amount}
          ></CartItemQuantity>
          <CartPictures gallery={gallery} />
        </CartItem>
      );
    }

    return arry;
  };

  render() {
    let { cart, cartTotal, symbol, quantity, tax } = this.props;
    if (Object.keys(cart).length === 0) {
      return (
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
      );
    }
    return (
      <Cart>
        <CartHeader>Cart</CartHeader>
        <CartItemsContainer>{this.loop(cart)}</CartItemsContainer>
        <TotalPriceWrap>
          <div
            style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}
          >
            <CartPriceLabel>Tax 21%:</CartPriceLabel>
            <Cartvalue>{`${symbol}${tax}`}</Cartvalue>
          </div>
          <div
            style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}
          >
            <CartPriceLabel>Quantity:</CartPriceLabel>
            <Cartvalue>{quantity}</Cartvalue>
          </div>
          <div
            style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}
          >
            <CartPriceLabel total={"true"}>Total:</CartPriceLabel>
            <Cartvalue>{`${symbol}${cartTotal}`}</Cartvalue>
          </div>
          <ProductAddToCartBtn order={"true"}>Order</ProductAddToCartBtn>
        </TotalPriceWrap>
      </Cart>
    );
  }
}

const mapStateToProps = (state) => {
  let { cart, cartTotal, currencies, totalCartProductQuantity, tax } =
    state.shop;
  let { selectedCurrency } = currencies;
  return {
    cart,
    cartTotal,
    symbol: selectedCurrency,
    quantity: totalCartProductQuantity,
    tax,
  };
};

export default connect(mapStateToProps)(ShopCart);
