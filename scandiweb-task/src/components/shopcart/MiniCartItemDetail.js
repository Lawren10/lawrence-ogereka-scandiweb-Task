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
  MiniCartItemDetailWrap,
} from "../../styled-compomets/ShopCartStyles";

export class MiniCartItemDetail extends Component {
  render() {
    let { att, name, brand, price, selectedAttribute } = this.props;

    let { amount, currency } = price;
    return (
      <MiniCartItemDetailWrap id="mini">
        <CartItemName mini={"true"} id="mini">
          {name}
        </CartItemName>
        <CartItemBrandName mini={"true"} id="mini">
          {brand}
        </CartItemBrandName>
        <CartPrice
          mini={"true"}
          id="mini"
        >{`${currency.symbol}${amount}`}</CartPrice>
        {att.map((each, index) => {
          let { name, type, items } = each;

          return (
            <div key={index} id="mini">
              <CartItemLabel mini={"true"} id="mini">
                {name}:
              </CartItemLabel>
              <CartContWrap mini={"true"} id="mini">
                {items.map((item, num) => {
                  let { displayValue } = item;
                  return type !== "swatch" ? (
                    <LabelWrap key={`${num}${type}`} id="mini">
                      <CartSizeCont
                        mini={"true"}
                        selected={
                          selectedAttribute[name] === displayValue
                            ? true
                            : false
                        }
                        id="mini"
                      >
                        {displayValue}
                      </CartSizeCont>
                    </LabelWrap>
                  ) : (
                    <CartSwatch
                      color={displayValue}
                      key={`${name}${displayValue}`}
                      selected={
                        selectedAttribute[name] === displayValue ? true : false
                      }
                      id="mini"
                    />
                  );
                })}
              </CartContWrap>
            </div>
          );
        })}
      </MiniCartItemDetailWrap>
    );
  }
}

export default MiniCartItemDetail;
