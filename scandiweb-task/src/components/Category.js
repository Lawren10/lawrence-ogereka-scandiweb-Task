import React, { Component } from "react";
import ShopItem from "./ShopItem";
import {
  CategoriesName,
  ProductsContainer,
} from "../styled-compomets/shopItemStyles";
import { connect } from "react-redux";

export class Category extends Component {
  render() {
    let { products, categoryName } = this.props;

    return (
      <main style={{ padding: "2rem" }}>
        <CategoriesName>{categoryName}</CategoriesName>
        <ProductsContainer>
          {products.map((item) => {
            return <ShopItem product={item} key={item.id} />;
          })}
        </ProductsContainer>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  const { products, categoryName } = state.shop;
  return {
    products: products,
    categoryName: categoryName,
  };
};

export default connect(mapStateToProps)(Category);
