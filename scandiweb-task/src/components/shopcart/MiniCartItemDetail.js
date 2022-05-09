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
import { connect } from "react-redux";
import { Action } from "../../redux/storereducer";
let { setSelectedItem } = Action;

export class MiniCartItemDetail extends Component {
  render() {
    let { att, name, brand, id, price, selectedAttribute, setSelectedItem } =
      this.props;

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
                  let { displayValue } = item;
                  return type !== "swatch" ? (
                    <LabelWrap key={`${num}${type}`}>
                      <CartSizeCont
                        mini={"true"}
                        selected={
                          selectedAttribute[name] === displayValue
                            ? true
                            : false
                        }
                        onClick={() => {
                          setSelectedItem({ id, name, num: displayValue });
                        }}
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
                      onClick={() => {
                        setSelectedItem({ id, name, num: displayValue });
                      }}
                    />
                  );
                })}
              </CartContWrap>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedItem: ({ id, name, num }) => {
      dispatch(setSelectedItem({ id, name, num }));
    },
  };
};

export default connect(null, mapDispatchToProps)(MiniCartItemDetail);
