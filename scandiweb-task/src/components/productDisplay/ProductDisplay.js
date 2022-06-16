import React, { Component } from "react";
import { connect } from "react-redux";
import GetParmas from "../HocComp";
import { getSingleProduct } from "../../redux/asyncQueries";
import ProductPicture from "./Productpicture";
import ProductDescription from "./ProductDescription";
import { Action } from "../../redux/storereducer";
import { ProductdisplayCont } from "../../styled-compomets/productDisplayStyle";
import Loading from "../Loading";
let { setsingleProductId } = Action;

class ProductDisplay extends Component {
  componentDidMount() {
    let { id, getSingleProduct } = this.props;
    getSingleProduct({ id, addtocart: false });
  }

  render() {
    let { displayPrice, id, selectedproduct } = this.props;

    if (selectedproduct.attributes === undefined) {
      return <Loading />;
    }

    let singlePrice = displayPrice[id];
    if (singlePrice === undefined) {
      return <Loading />;
    }
    let { amount, currency } = singlePrice;

    let {
      attributes,
      brand,
      description,
      name,
      gallery,
      inStock,
      selectedAttribute,
    } = selectedproduct;

    return (
      <ProductdisplayCont>
        <ProductPicture gallery={gallery} />
        <ProductDescription
          attributes={attributes}
          brand={brand}
          description={description}
          name={name}
          amount={amount}
          currency={currency}
          inStock={inStock}
          id={id}
          selectedAttribute={selectedAttribute}
        />
      </ProductdisplayCont>
    );
  }
}

ProductDisplay = GetParmas(ProductDisplay);

const mapStateToProps = (state) => {
  let { displayPrice, singleProductId, selectedproduct } = state.shop;
  return {
    displayPrice: displayPrice,
    singleProductId: singleProductId,
    selectedproduct: selectedproduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSingleProduct: ({ id, addtocart }) => {
      dispatch(getSingleProduct({ id, addtocart }));
    },
    setsingleProductId: (pid) => {
      dispatch(setsingleProductId(pid));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDisplay);
