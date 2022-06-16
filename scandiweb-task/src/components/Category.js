import React, { Component } from "react";
import ShopItem from "./ShopItem";
import {
  CategoriesName,
  ProductsContainer,
  MainContainer,
} from "../styled-compomets/shopItemStyles";
import GetParmas from "./HocComp";
import { Action } from "../redux/storereducer";
import { getCategory } from "../redux/asyncQueries";
import { connect } from "react-redux";
import Loading from "./Loading";

let { setActive } = Action;

export class Category extends Component {
  componentDidMount() {
    let categoryName = this.props.name;
    if (categoryName === undefined) {
      this.props.getCategory("all");
      return;
    }
    this.props.getCategory(categoryName);
    this.props.setActive(categoryName);
  }

  render() {
    let { products, categoryName, displayPrice, name } = this.props;
    if (products.length === 0) {
      return <Loading />;
    }

    return (
      <MainContainer>
        <CategoriesName>{`${name ? categoryName : ""}`}</CategoriesName>
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

Category = GetParmas(Category);

const mapDispatchToProps = (dispatch) => {
  return {
    getCategory: (name) => {
      dispatch(getCategory(name));
    },
    setActive: (name) => {
      dispatch(setActive(name));
    },
  };
};

const mapStateToProps = (state) => {
  const { products, categoryName, displayPrice, Active } = state.shop;
  return {
    products: products,
    categoryName: categoryName,
    displayPrice: displayPrice,
    Active,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
