import { createSlice } from "@reduxjs/toolkit";
import {
  getCategory,
  getCurrencies,
  getSingleProduct,
  // getPrice,
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
      let { res, category, fullPriceArr, currencyPrices } = action.payload;
      let { name, products } = res.category;

      state.products = products;
      state.categoryName = name;
      state.navCategories = category.categories;
      state.displayPrice = currencyPrices;
      state.prices = fullPriceArr;
    },

    [getCurrencies.fulfilled]: (state, action) => {
      state.currencies.navCurrencies = action.payload.currencies;
    },

    [getSingleProduct.fulfilled]: (state, action) => {
      let { res, addtocart } = action.payload;
      let product = res.product;
      let { attributes, id } = product;

      let selected = {};
      for (let att of attributes) {
        let { items, name } = att;
        let singleItem = items[0];
        att.selectedAttribute = singleItem.displayValue;
        selected[name] = singleItem.displayValue;
      }
      product.price = state.displayPrice[id];
      product.quantity = 1;
      product.selectedAttribute = selected;
      state.selectedproduct = product;
      if (addtocart === true) {
        let { amount } = product.price;

        state.cart[id] = product;
        state.itemsInCart += 1;
        state.totalCartProductQuantity = state.totalCartProductQuantity + 1;
        state.cartTotal += Math.round(amount);
        state.tax = Math.round(state.cartTotal * 0.21);
      }
    },
  },
});

export const Action = Shop.actions;

export default Shop.reducer;

// [addToCartFromCategory.fulfilled]:(state)=>{

// }

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

// [getPrice.fulfilled]: (state, action) => {
//       let { fullPriceArr, currencyPrices } = action.payload;
//       state.displayPrice = currencyPrices;
//       state.prices = fullPriceArr;
//     },
