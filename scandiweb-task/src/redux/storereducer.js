import { createSlice } from "@reduxjs/toolkit";
import {
  getCategory,
  getCurrencies,
  getSingleProduct,
  // addToCart,
} from "./asyncQueries";
import fullShop from "./storeState";
import shopActions from "./storeActions";
const Shop = createSlice({
  name: "store",
  initialState: {
    ...fullShop,
  },
  reducers: {
    ...shopActions,
  },
  extraReducers: {
    [getCategory.fulfilled]: (state, action) => {
      let { fullPriceArr, currencyPrices, res, category } = action.payload;
      let { name, products } = res.category;
      state.products = products;
      state.categoryName = name;
      state.displayPrice = currencyPrices;
      state.prices = fullPriceArr;
      state.navCategories = category.categories;
    },

    [getCurrencies.fulfilled]: (state, action) => {
      state.currencies.navCurrencies = action.payload.currencies;
    },

    [getSingleProduct.fulfilled]: (state, action) => {
      state.selectedproduct = action.payload.product;

      let product = action.payload.product;
      let { attributes, id } = product;

      let selected = {};
      for (let att of attributes) {
        let { items, name } = att;
        let singleItem = items[0];
        att.selectedAttribute = singleItem.displayValue;
        selected[name] = singleItem.displayValue;
      }
      state.selectedproduct.selectedAttribute = selected;
      product.price = state.displayPrice[id];
      product.quantity = 1;
      // state.generatedId = id;
      // delete product.prices;
    },

    // [addToCart.fulfilled]: (state, action) => {
    //   let product = action.payload;
    //   let { id, price } = product;
    //   let { amount } = price;

    //   // let selected = {};
    //   // for (let att of attributes) {
    //   //   let { items, name } = att;
    //   //   let singleItem = items[0];
    //   //   att.selectedAttribute = singleItem.displayValue;
    //   //   selected[name] = singleItem.displayValue;
    //   //   // items.forEach((ele, index) => {
    //   //   //   index === 0 ? (ele.selected = "true") : (ele.selected = "false");
    //   //   // });
    //   // }
    //   // product.selectedAttribute = selected;

    //   state.cart[id] = product;
    //   state.itemsInCart += 1;
    //   state.totalCartProductQuantity = state.totalCartProductQuantity + 1;
    //   state.cartTotal += Math.round(amount);
    //   state.tax = Math.round(state.cartTotal * 0.21);
    // },
  },
});

export const Action = Shop.actions;

export default Shop.reducer;
