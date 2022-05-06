import React, { Component } from "react";
import {
  QuantityChange,
  QuantityCount,
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
        this.props.deleteFromCart(id);
        return;
      }
      num = num - 1;
      this.props.changeQuantity({ id, num, amount, func });
      this.props.decreaseTotalQty();
    }
  };

  render() {
    let { quantity, id, amount } = this.props;
    // console.log(this.props);
    return (
      <>
        <QuantityChange
          onClick={() => {
            this.changeItemQuantity("increase", quantity, id, amount);
          }}
          start={"true"}
        >
          +
        </QuantityChange>
        <QuantityCount>{quantity}</QuantityCount>
        <QuantityChange
          onClick={() => {
            this.changeItemQuantity("decrease", quantity, id, amount);
          }}
          start={"false"}
        >
          -
        </QuantityChange>
      </>
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
    deleteFromCart: (id) => {
      dispatch(deleteFromCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItemQuantity);
