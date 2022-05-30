import React, { Component } from "react";
import {
  Cart,
  CartHeader,
  CartItemsContainer,
  CartItem,
  CartPriceLabel,
  Cartvalue,
  MiniCartTotalView,
  MinicartTotalCont,
  MinicartButtonCont,
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
        <CartItem key={item} mini={"true"} id="mini">
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
            cartId={item}
            amount={amount}
          ></MiniCartItemQuantity>
          <MiniCartPictures gallery={gallery} id="mini" />
        </CartItem>
      );
    }

    return arry;
  };

  render() {
    let { cart, symbol, itemsInCart, cartTotal } = this.props;

    return (
      <>
        <Cart mini={"true"} id="mini">
          <CartHeader mini={"true"} id="mini">
            My Bag,
            <span style={{ fontWeight: "400" }} id="mini">
              {itemsInCart} item{itemsInCart > 1 ? "s" : ""}
            </span>
          </CartHeader>
          <CartItemsContainer mini={"true"} id="mini">
            {this.loop(cart)}
          </CartItemsContainer>
        </Cart>
        <MiniCartTotalView id="mini">
          <MinicartTotalCont id="mini">
            <CartPriceLabel total={"true"} mini={"true"} id="mini">
              Total:
            </CartPriceLabel>
            <Cartvalue
              datatype={"true"}
              id="mini"
            >{`${symbol}${cartTotal}`}</Cartvalue>
          </MinicartTotalCont>
          <MinicartButtonCont id="mini">
            <ProductAddToCartBtn
              order={"true"}
              instock={false}
              minicart={"true"}
              mini={"true"}
              id="mini"
            >
              <ShopLink to="/cart" id="mini">
                View Bag
              </ShopLink>
            </ProductAddToCartBtn>

            <ProductAddToCartBtn order={"true"} mini={"true"} id="mini">
              Check Out
            </ProductAddToCartBtn>
          </MinicartButtonCont>
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
