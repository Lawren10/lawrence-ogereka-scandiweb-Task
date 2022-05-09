import React, { Component } from "react";
import {
  Cart,
  CartHeader,
  CartItemsContainer,
  CartItem,
  CartPriceLabel,
  Cartvalue,
  MiniCartTotalView,
} from "../../styled-compomets/ShopCartStyles";

import { ProductAddToCartBtn } from "../../styled-compomets/productDisplayStyle";
import { ShopLink } from "../../styled-compomets/Global-style-theme";

import MiniCartItemDetail from "./MiniCartItemDetail";
import MiniCartItemQuantity from "./MiniCartItemQuantity";
import MiniCartPictures from "./MiniCartPictures";
import { connect } from "react-redux";

export class MiniCart extends Component {
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
        <CartItem key={item} mini={"true"}>
          <MiniCartItemDetail
            att={attributes}
            name={name}
            brand={brand}
            id={id}
            price={price}
            selectedAttribute={selectedAttribute}
          />
          <MiniCartItemQuantity
            quantity={quantity}
            id={id}
            amount={amount}
          ></MiniCartItemQuantity>
          <MiniCartPictures gallery={gallery} />
        </CartItem>
      );
    }

    return arry;
  };

  render() {
    let { cart, symbol, itemsInCart, cartTotal } = this.props;

    return (
      <>
        <Cart mini={"true"}>
          <CartHeader mini={"true"}>
            My Bag,
            <span style={{ fontWeight: "400" }}>
              {itemsInCart} item{itemsInCart > 1 ? "s" : ""}
            </span>
          </CartHeader>
          <CartItemsContainer mini={"true"}>
            {this.loop(cart)}
          </CartItemsContainer>
        </Cart>
        <MiniCartTotalView>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "0.5rem",
            }}
          >
            <CartPriceLabel total={"true"} mini={"true"}>
              Total:
            </CartPriceLabel>
            <Cartvalue mini={"true"}>{`${symbol}${cartTotal}`}</Cartvalue>
          </div>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
            <ProductAddToCartBtn
              order={"true"}
              instock={false}
              minicart={"true"}
              mini={"true"}
            >
              <ShopLink to="/cart">View Bag</ShopLink>
            </ProductAddToCartBtn>

            <ProductAddToCartBtn order={"true"} mini={"true"}>
              Check Out
            </ProductAddToCartBtn>
          </div>
        </MiniCartTotalView>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  let { cart, cartTotal, currencies, totalCartProductQuantity, itemsInCart } =
    state.shop;
  let { selectedCurrency } = currencies;
  return {
    cart,
    cartTotal,
    symbol: selectedCurrency,
    quantity: totalCartProductQuantity,
    itemsInCart,
  };
};

export default connect(mapStateToProps)(MiniCart);
