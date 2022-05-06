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
} from "../../styled-compomets/ShopCartStyles";
import "../../index.css";

export class CartItemDetail extends Component {
  render() {
    // console.log(this.props);
    let { att, name, brand, id, price } = this.props;

    // console.log(this.props);
    let { amount, currency } = price;
    return (
      <div style={{ marginRight: "auto" }}>
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
                  return type !== "swatch" ? (
                    <LabelWrap key={`${num}${type}`}>
                      <input
                        type="radio"
                        id={`${name}${item.displayValue}`}
                        name={`${id}${name}`}
                        key={`${name}${item.displayValue}`}
                      />
                      <CartSizeCont
                        htmlFor={`${name}${item.displayValue}`}
                        className="desc"
                        key={`${name}${item.displayValue}${num}`}
                      >
                        {item.displayValue}
                      </CartSizeCont>
                    </LabelWrap>
                  ) : (
                    <div key={`${num}${type}`}>
                      <input
                        type="radio"
                        id={`${name}${item.displayValue}`}
                        name={`${id}${name}`}
                        key={`${name}${item.displayValue}`}
                      />
                      <CartSwatch
                        color={item.displayValue}
                        htmlFor={`${name}${item.displayValue}`}
                        className="swatch"
                        key={`${name}${item.displayValue}${num}`}
                      />
                    </div>
                  );
                })}
              </CartContWrap>
            </div>
          );
        })}
        {/* {console.log(this.state)} */}
      </div>
    );
  }
}

export default CartItemDetail;
