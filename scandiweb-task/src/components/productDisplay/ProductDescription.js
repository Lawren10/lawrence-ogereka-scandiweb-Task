import React, { Component } from "react";
import {
  ProductDescWrap,
  ProductName,
  ProductBrandName,
  ProductLabel,
  ProductSizeCont,
  ProductSizeContWrap,
  ProductPriceLabel,
  ProductPrice,
  ProductAddToCartBtn,
  ProductDescriptionText,
  ProductSwatch,
} from "../../styled-compomets/productDisplayStyle";
import { connect } from "react-redux";
import { addToCart } from "../../redux/asyncQueries";

export class ProductDescription extends Component {
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
    let {
      attributes,
      brand,
      description,
      name,
      amount,
      currency,
      inStock,
      id,
    } = this.props;
    if (attributes === undefined) {
      return;
    }

    return (
      <ProductDescWrap>
        <div style={{ marginBottom: "1.5rem" }}>
          <ProductName>{name}</ProductName>
          <ProductBrandName>{brand}</ProductBrandName>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          {attributes.map((att, index) => {
            let { name, type, items } = att;
            return (
              <div key={index}>
                <ProductLabel>{name}</ProductLabel>
                <ProductSizeContWrap>
                  {items.map((item, num) => {
                    return type !== "swatch" ? (
                      <ProductSizeCont key={num}>
                        {item.displayValue}
                      </ProductSizeCont>
                    ) : (
                      <ProductSwatch color={item.displayValue} key={num} />
                    );
                  })}
                </ProductSizeContWrap>
              </div>
            );
          })}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <ProductPriceLabel>Price:</ProductPriceLabel>
          <ProductPrice>{`${currency.symbol} ${amount}`}</ProductPrice>
        </div>

        {!inStock ? (
          <ProductAddToCartBtn instock={inStock}>
            Out Of Stock
          </ProductAddToCartBtn>
        ) : (
          <ProductAddToCartBtn
            onClick={() => {
              this.showMessage(id);
            }}
          >
            {this.state.added
              ? "Item Added To Cart"
              : this.state.show
              ? "Item Already in Cart"
              : "Add To Cart"}
          </ProductAddToCartBtn>
        )}

        <ProductDescriptionText
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </ProductDescWrap>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDescription);
