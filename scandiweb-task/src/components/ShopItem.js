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
  AddedToCartMessage,
} from "../styled-compomets/shopItemStyles";
import { ShopLink } from "../styled-compomets/Global-style-theme";
import { connect } from "react-redux";
import { Action } from "../redux/storereducer";
import { addToCart } from "../redux/asyncQueries";
let { setsingleProductId, setSelectedProduct } = Action;

export class ShopItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      added: false,
      show: false,
    };
  }

  showMessage = (id) => {
    let clearMessage1;
    let clearMessage2;
    if (id in this.props.cart) {
      clearTimeout(clearMessage1);
      this.setState({ added: false, show: true });
      clearMessage1 = setTimeout(() => {
        this.setState({ added: false, show: false });
      }, 1000);
      return;
    }
    this.props.addToCart(id);
    clearTimeout(clearMessage2);
    this.setState({ added: true, show: true });
    clearMessage2 = setTimeout(() => {
      this.setState({ added: false, show: false });
    }, 1000);
  };

  render() {
    let { product, Price } = this.props;
    let { name, id, gallery, inStock } = product;

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
              <ItemName inStock={inStock}>{name && name}</ItemName>
              <ItemPrice
                inStock={inStock}
              >{`${currency.symbol} ${amount}`}</ItemPrice>
            </ShopLink>
            {inStock && (
              <AddToChartBtn
                onClick={() => {
                  this.showMessage(id);
                }}
              >
                <BsCart2 />
              </AddToChartBtn>
            )}
            <AddedToCartMessage
              show={this.state.show}
              added={this.state.added}
            >{`${
              this.state.added ? "Item Added To Cart" : "Item Already In Cart"
            }`}</AddedToCartMessage>
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
    addToCart: (id) => {
      dispatch(addToCart(id));
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
