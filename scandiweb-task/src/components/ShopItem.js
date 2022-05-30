import React, { Component } from "react";
import { BsCart2 } from "react-icons/bs";
import {
  ItemWrapper,
  PicContainer,
  ItemName,
  ItemPrice,
  AddToChartBtn,
  ItemPic,
  OutOfStockOverLay,
  OutOfStockText,
  ItemBrandName,
} from "../styled-compomets/shopItemStyles";
import { ShopLink } from "../styled-compomets/Global-style-theme";
import { connect } from "react-redux";
import { Action } from "../redux/storereducer";

let { setsingleProductId, setSelectedProduct } = Action;

export class ShopItem extends Component {
  render() {
    let { product, Price } = this.props;
    let { name, id, gallery, inStock, brand } = product;

    let { amount, currency } = Price;

    return (
      <>
        {
          <ItemWrapper>
            <ShopLink to={`/product/${id}`}>
              <PicContainer>
                <ItemPic src={gallery[0]}></ItemPic>
                {!inStock && (
                  <OutOfStockOverLay>
                    <OutOfStockText>OUT OF STOCK</OutOfStockText>
                  </OutOfStockOverLay>
                )}
              </PicContainer>
              <ItemBrandName inStock={inStock}>{brand && brand}</ItemBrandName>
              <ItemName inStock={inStock}>{name && name}</ItemName>
              <ItemPrice
                inStock={inStock}
              >{`${currency.symbol} ${amount}`}</ItemPrice>
              {inStock && (
                <AddToChartBtn>
                  <BsCart2 />
                </AddToChartBtn>
              )}
            </ShopLink>
          </ItemWrapper>
        }
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setsingleProductId: (id) => {
      dispatch(setsingleProductId(id));
    },
    setSelectedProduct: (prod) => {
      dispatch(setSelectedProduct(prod));
    },
  };
};

const mapStateToProps = (state) => {
  let { cart } = state.shop;
  return {
    cart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopItem);
