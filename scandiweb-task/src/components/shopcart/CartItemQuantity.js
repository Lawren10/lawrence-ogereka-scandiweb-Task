import React, { Component } from "react";
import {
  QuantityChange,
  QuantityCount,
  QuantityWraper,
} from "../../styled-compomets/ShopCartStyles";
import { connect } from "react-redux";
import { Action } from "../../redux/storereducer";
let { changeQuantity, increaseTotalQty, decreaseTotalQty, deleteFromCart } =
  Action;

export class CartItemQuantity extends Component {
  changeItemQuantity = (func, num, id, amount) => {
    if (func === "increase") {
      num = num + 1;
      this.props.changeQuantity({ id, num, amount, func });
      this.props.increaseTotalQty();
    }

    if (func === "decrease") {
      if (num <= 1) {
        this.props.deleteFromCart({ id, num, amount });
        return;
      }
      num = num - 1;
      this.props.changeQuantity({ id, num, amount, func });
      this.props.decreaseTotalQty();
    }
  };

  render() {
    let { quantity, amount, cartId } = this.props;

    return (
      <QuantityWraper>
        <QuantityChange
          onClick={() => {
            this.changeItemQuantity("increase", quantity, cartId, amount);
          }}
          start={"true"}
        >
          +
        </QuantityChange>
        <QuantityCount>{quantity}</QuantityCount>
        <QuantityChange
          onClick={() => {
            this.changeItemQuantity("decrease", quantity, cartId, amount);
          }}
          start={"false"}
        >
          -
        </QuantityChange>
      </QuantityWraper>
    );
  }
}

const mapStateToProps = (state) => {
  let { cart } = state.shop;
  return {
    cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeQuantity: (value) => {
      dispatch(changeQuantity(value));
    },
    increaseTotalQty: () => {
      dispatch(increaseTotalQty());
    },
    decreaseTotalQty: () => {
      dispatch(decreaseTotalQty());
    },
    deleteFromCart: ({ id, num, amount }) => {
      dispatch(deleteFromCart({ id, num, amount }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItemQuantity);
