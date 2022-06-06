import React, { Component } from "react";
import ShopItem from "./ShopItem";
import {
  CategoriesName,
  ProductsContainer,
  MainContainer,
} from "../styled-compomets/shopItemStyles";
import { connect } from "react-redux";
import Loading from "./Loading";

export class Category extends Component {
  render() {
    let { products, categoryName, displayPrice } = this.props;
    if (products.length === 0) {
      return <Loading />;
    }

    return (
      <MainContainer>
        <CategoriesName>{categoryName}</CategoriesName>
        <ProductsContainer>
          {products.map((item, index) => {
            return (
              <ShopItem
                product={item}
                key={item.id}
                Price={displayPrice[item.id]}
                pid={item.id}
              />
            );
          })}
        </ProductsContainer>
      </MainContainer>
    );
  }
}

const mapStateToProps = (state) => {
  const { products, categoryName, displayPrice } = state.shop;
  return {
    products: products,
    categoryName: categoryName,
    displayPrice: displayPrice,
  };
};

export default connect(mapStateToProps)(Category);
