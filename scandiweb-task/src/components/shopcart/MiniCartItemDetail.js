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

export class MiniCartItemDetail extends Component {
  render() {
    // console.log(this.props);
    let { att, name, brand, id, price } = this.props;

    // console.log(this.props);
    let { amount, currency } = price;
    return (
      <div style={{ marginRight: "auto" }}>
        <CartItemName mini={"true"}>{name}</CartItemName>
        <CartItemBrandName mini={"true"}>{brand}</CartItemBrandName>
        <CartPrice mini={"true"}>{`${currency.symbol}${amount}`}</CartPrice>
        {att.map((each, index) => {
          let { name, type, items } = each;

          return (
            <div key={index}>
              <CartItemLabel mini={"true"}>{name}:</CartItemLabel>
              <CartContWrap mini={"true"}>
                {items.map((item, num) => {
                  return type !== "swatch" ? (
                    <LabelWrap key={`${num}${type}`}>
                      <input
                        type="radio"
                        id={`${name}${item.displayValue}-mini`}
                        name={`${id}${name}`}
                      />
                      <CartSizeCont
                        htmlFor={`${name}${item.displayValue}-mini`}
                        className="desc"
                        mini={"true"}
                      >
                        {item.displayValue}
                      </CartSizeCont>
                    </LabelWrap>
                  ) : (
                    <div key={`${num}${type}`}>
                      <input
                        type="radio"
                        id={`${name}${item.displayValue}-mini`}
                        name={`${id}${name}`}
                        key={item.displayValue}
                      />
                      <CartSwatch
                        color={item.displayValue}
                        htmlFor={`${name}${item.displayValue}-mini`}
                        className="swatch"
                        key={`${name}${item.displayValue}`}
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

export default MiniCartItemDetail;
