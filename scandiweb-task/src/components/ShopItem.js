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
  AddedToCartMessage,
} from "../styled-compomets/shopItemStyles";
import { getSingleProduct } from "../redux/asyncQueries";
import { ShopLink } from "../styled-compomets/Global-style-theme";
import { connect } from "react-redux";
import { Action } from "../redux/storereducer";

let {
  setsingleProductId,
  setSelectedProduct,
  increaseSameProductQuantity,
  increaseTotalQty,
  setGeneratedId,
  setLoadPrice,
} = Action;

export class ShopItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      added: false,
      show: false,
    };
  }

  addingToCart = (id, amount) => {
    let clearMessage1;
    let storeCart = this.props.cart;

    if (id in storeCart) {
      this.props.increaseSameProductQuantity({
        id,
        amount,
      });
      this.props.increaseTotalQty();
      clearTimeout(clearMessage1);
      this.setState({ ...this.state, added: true, show: true });
      clearMessage1 = setTimeout(() => {
        this.setState({ added: false, show: false });
      }, 1000);
      return;
    }
    this.props.getSingleProduct({ id, addtocart: true });
    this.props.setGeneratedId(id);
    clearTimeout(clearMessage1);
    this.setState({ ...this.state, added: true, show: true });
    clearMessage1 = setTimeout(() => {
      this.setState({ added: false, show: false });
    }, 1000);
    return;
  };

  render() {
    let { product, Price } = this.props;
    let { name, id, gallery, inStock, brand } = product;

    let { amount, currency } = Price;

    return (
      <>
        {
          <ItemWrapper>
            <ShopLink
              to={`/product/${id}`}
              onClick={() => {
                this.props.setLoadPrice();
              }}
            >
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
            </ShopLink>

            {inStock && (
              <AddToChartBtn
                onClick={() => {
                  this.addingToCart(id, amount);
                }}
              >
                <BsCart2 />
              </AddToChartBtn>
            )}

            <AddedToCartMessage show={this.state.show} added={this.state.added}>
              Item added to cart
            </AddedToCartMessage>
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
    increaseSameProductQuantity: ({ id, amount }) => {
      dispatch(increaseSameProductQuantity({ id, amount }));
    },
    increaseTotalQty: () => {
      dispatch(increaseTotalQty());
    },

    setGeneratedId: (genId) => {
      dispatch(setGeneratedId(genId));
    },
    getSingleProduct: ({ id, addtocart }) => {
      dispatch(getSingleProduct({ id, addtocart }));
    },
    setLoadPrice: () => {
      dispatch(setLoadPrice());
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
