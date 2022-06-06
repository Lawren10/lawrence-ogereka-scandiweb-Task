import React, { Component } from "react";
import {
  CartItemName,
  CartItemBrandName,
  CartItemLabel,
  CartPrice,
  CartSizeCont,
  CartSwatch,
  CartContWrap,
  LabelWrap,
  CartContentWrap,
} from "../../styled-compomets/ShopCartStyles";

export class CartItemDetail extends Component {
  render() {
    let { att, name, brand, price, selectedAttribute } = this.props;

    let { amount, currency } = price;
    return (
      <CartContentWrap>
        <CartItemName>{name}</CartItemName>
        <CartItemBrandName>{brand}</CartItemBrandName>
        <CartPrice>{`${currency.symbol}${amount}`}</CartPrice>
        {att.map((each, index) => {
          let { name, type, items } = each;

          return (
            <div key={index}>
              <CartItemLabel>{name}</CartItemLabel>
              <CartContWrap>
                {items.map((item, num) => {
                  let { displayValue } = item;
                  return type !== "swatch" ? (
                    <LabelWrap key={`${num}${type}`}>
                      <CartSizeCont
                        selected={
                          selectedAttribute[name] === displayValue
                            ? true
                            : false
                        }
                        key={`${name}${displayValue}${num}`}
                      >
                        {displayValue}
                      </CartSizeCont>
                    </LabelWrap>
                  ) : (
                    <CartSwatch
                      color={displayValue}
                      key={`${name}${displayValue}${num}`}
                      selected={
                        selectedAttribute[name] === displayValue ? true : false
                      }
                    />
                  );
                })}
              </CartContWrap>
            </div>
          );
        })}
      </CartContentWrap>
    );
  }
}

export default CartItemDetail;
