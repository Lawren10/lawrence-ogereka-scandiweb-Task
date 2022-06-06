import React, { Component } from "react";
import {
  Cart,
  CartHeader,
  CartItemsContainer,
  CartItem,
  TotalPriceWrap,
  CartPriceLabel,
  Cartvalue,
  ShopCartEmptyMessage,
  CartPriceItemFlexWrap,
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
            cartId={item}
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
        <ShopCartEmptyMessage>
          <h1>Sorry Your Cart Is Empty</h1>
        </ShopCartEmptyMessage>
      );
    }
    return (
      <Cart>
        <CartHeader>Cart</CartHeader>
        <CartItemsContainer>{this.loop(cart)}</CartItemsContainer>
        <TotalPriceWrap>
          <CartPriceItemFlexWrap>
            <CartPriceLabel>Tax 21%:</CartPriceLabel>
            <Cartvalue>{`${symbol}${tax}`}</Cartvalue>
          </CartPriceItemFlexWrap>
          <CartPriceItemFlexWrap>
            <CartPriceLabel>Quantity:</CartPriceLabel>
            <Cartvalue>{quantity}</Cartvalue>
          </CartPriceItemFlexWrap>
          <CartPriceItemFlexWrap>
            <CartPriceLabel total={"true"}>Total:</CartPriceLabel>
            <Cartvalue>{`${symbol}${cartTotal}`}</Cartvalue>
          </CartPriceItemFlexWrap>
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
