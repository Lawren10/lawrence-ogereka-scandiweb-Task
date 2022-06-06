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
  PDivider,
} from "../../styled-compomets/productDisplayStyle";

import { connect } from "react-redux";
import { Action } from "../../redux/storereducer";

let {
  setSelectedItem,
  addToCart,
  setGeneratedId,
  increaseSameProductQuantity,
  increaseTotalQty,
} = Action;

export class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      added: false,
      show: false,
    };
  }

  parseHTMLString = (stringToParse) => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(stringToParse, "text/html");

    let elementList = doc.body.children;

    if (elementList.length === 0) {
      return doc.body.innerText;
    }

    const createJsx = (list) => {
      let childrenList = Array.from(list);
      return childrenList.map((item) => {
        let { children, localName, innerText } = item;

        let genJsx = creatnewElement(localName, innerText, children);
        return genJsx;
      });
    };

    const creatnewElement = (name, innerItem, elemChildren) => {
      let property = Math.random() * 100;
      let childCount = elemChildren.length > 0;
      return React.createElement(
        name,
        { key: property },
        childCount ? createJsx(elemChildren) : innerItem
      );
    };

    return createJsx(elementList);
  };

  checkIdenticalAttribute = (selectedProduct, productinCart, checklength) => {
    let checksame = 0;

    for (let att in selectedProduct) {
      if (selectedProduct[att] === productinCart[att]) {
        checksame = checksame + 1;
      }
    }

    if (checksame === checklength) {
      return true;
    }

    return false;
  };

  showMessage = (id) => {
    let clearMessage2;
    let storeCart = this.props.cart;
    let presentProductAttribute = this.props.selectedAttribute;
    let appendToId = Date.now();

    let storeCartKeys = Object.keys(storeCart);
    let identicalProduct = storeCartKeys.filter((item) => item.includes(id));
    let keysLength = Object.keys(presentProductAttribute).length;

    if (this.props.generatedId.length > 0 && storeCartKeys.length > 0) {
      let prevProductAtt = storeCart[this.props.generatedId].selectedAttribute;
      let initialAttributeCheck = this.checkIdenticalAttribute(
        presentProductAttribute,
        prevProductAtt,
        keysLength
      );

      if (initialAttributeCheck) {
        let amount = storeCart[this.props.generatedId].price.amount;

        this.props.increaseSameProductQuantity({
          id: this.props.generatedId,
          amount,
        });
        this.props.increaseTotalQty();
        clearTimeout(clearMessage2);
        this.setState({ ...this.state, added: true, show: true });
        clearMessage2 = setTimeout(() => {
          this.setState({ added: false, show: false });
        }, 1000);
        return;
      }
    }

    if (identicalProduct.length > 0) {
      let sameAttProductId = "";
      identicalProduct.forEach((key) => {
        let itemInnerAttribute = storeCart[key].selectedAttribute;

        let sameAttCheck = this.checkIdenticalAttribute(
          itemInnerAttribute,
          presentProductAttribute,
          keysLength
        );

        if (sameAttCheck) {
          sameAttProductId = key;
          return;
        }

        return;
      });

      if (sameAttProductId.length > 0) {
        let amount = storeCart[sameAttProductId].price.amount;

        this.props.increaseSameProductQuantity({
          id: sameAttProductId,
          amount,
        });
        this.props.increaseTotalQty();
        clearTimeout(clearMessage2);
        this.setState({ added: true, show: true });
        clearMessage2 = setTimeout(() => {
          this.setState({ ...this.state, added: false, show: false });
        }, 1000);
        return;
      }

      let newId = `${id}${appendToId}`;

      this.props.addToCart({
        id: newId,
        currentProduct: this.props.selectedproduct,
      });
      this.props.setGeneratedId(`${id}${appendToId}`);
      clearTimeout(clearMessage2);
      this.setState({ added: true, show: true });
      clearMessage2 = setTimeout(() => {
        this.setState({ ...this.state, added: false, show: false });
      }, 1000);
      return;
    } else {
      this.props.addToCart({
        id,
        currentProduct: this.props.selectedproduct,
      });
      this.props.setGeneratedId(id);
      clearTimeout(clearMessage2);
      this.setState({ added: true, show: true });
      clearMessage2 = setTimeout(() => {
        this.setState({ ...this.state, added: false, show: false });
      }, 1000);
    }
  };

  render() {
    let {
      attributes,
      description,
      brand,
      name,
      amount,
      currency,
      inStock,
      id,
      selectedAttribute,
      setSelectedItem,
    } = this.props;
    if (attributes === undefined) {
      return;
    }

    return (
      <ProductDescWrap>
        <PDivider bottom={"1.5rem"}>
          <ProductName>{name}</ProductName>
          <ProductBrandName>{brand}</ProductBrandName>
        </PDivider>

        <PDivider bottom={"1rem"}>
          {attributes.map((att, index) => {
            let { name, type, items } = att;
            return (
              <div key={index}>
                <ProductLabel>{name}</ProductLabel>
                <ProductSizeContWrap>
                  {items.map((item, num) => {
                    let { displayValue } = item;
                    return type !== "swatch" ? (
                      <ProductSizeCont
                        selected={
                          selectedAttribute[name] === displayValue
                            ? true
                            : false
                        }
                        key={`${name}${displayValue}${num}`}
                        onClick={() => {
                          setSelectedItem({ id, name, num: displayValue });
                        }}
                      >
                        {item.displayValue}
                      </ProductSizeCont>
                    ) : (
                      <ProductSwatch
                        color={item.displayValue}
                        key={`${name}${displayValue}${num}`}
                        selected={
                          selectedAttribute[name] === displayValue
                            ? true
                            : false
                        }
                        onClick={() => {
                          setSelectedItem({ id, name, num: displayValue });
                        }}
                      />
                    );
                  })}
                </ProductSizeContWrap>
              </div>
            );
          })}
        </PDivider>

        <PDivider bottom={"1rem"}>
          <ProductPriceLabel>Price:</ProductPriceLabel>
          <ProductPrice>{`${currency.symbol} ${amount}`}</ProductPrice>
        </PDivider>

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

        <ProductDescriptionText ref={this.descRef}>
          {this.parseHTMLString(description)}
        </ProductDescriptionText>
      </ProductDescWrap>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: ({ id, currentProduct }) => {
      dispatch(addToCart({ id, currentProduct }));
    },
    setSelectedItem: ({ id, name, num }) => {
      dispatch(setSelectedItem({ id, name, num }));
    },
    setGeneratedId: (genId) => {
      dispatch(setGeneratedId(genId));
    },
    increaseSameProductQuantity: ({ id, amount }) => {
      dispatch(increaseSameProductQuantity({ id, amount }));
    },
    increaseTotalQty: () => {
      dispatch(increaseTotalQty());
    },
  };
};

const mapStateToProps = (state) => {
  let { cart, selectedproduct, generatedId } = state.shop;
  return {
    cart,
    selectedproduct,
    generatedId,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDescription);
