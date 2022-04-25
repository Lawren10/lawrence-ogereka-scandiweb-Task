import React, { Component } from "react";
import { BsCart2 } from "react-icons/bs";
import {
  ItemWrapper,
  PicContainer,
  ItemName,
  ItemPrice,
  AddToChartBtn,
  ItemPic,
} from "../styled-compomets/shopItemStyles";

export class ShopItem extends Component {
  render() {
    let { product } = this.props;
    let { name, id, gallery } = product;
    return (
      <>
        {
          <ItemWrapper>
            <PicContainer>
              <ItemPic src={gallery[0]}></ItemPic>
            </PicContainer>
            <ItemName>{name && name}</ItemName>
            <ItemPrice>Price</ItemPrice>
            <AddToChartBtn id={id}>
              <BsCart2 />
            </AddToChartBtn>
          </ItemWrapper>
        }
      </>
    );
  }
}

export default ShopItem;
