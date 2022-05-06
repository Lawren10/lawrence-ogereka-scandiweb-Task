import { createSlice } from "@reduxjs/toolkit";
import {
  getCategory,
  getCurrencies,
  getSingleProduct,
  addToCart,
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
      let { fullPriceArr, currencyPrices, res } = action.payload;
      let { name, products } = res.category;
      state.products = products;
      state.categoryName = name;
      state.displayPrice = currencyPrices;
      state.prices = fullPriceArr;
    },

    [getCurrencies.fulfilled]: (state, action) => {
      state.currencies.navCurrencies = action.payload.currencies;
    },

    [getSingleProduct.fulfilled]: (state, action) => {
      state.selectedproduct = action.payload.product;
    },
    [addToCart.fulfilled]: (state, action) => {
      let { id, price } = action.payload;
      let { amount } = price;

      state.cart[id] = action.payload;
      state.itemsInCart += 1;
      state.totalCartProductQuantity = state.totalCartProductQuantity + 1;
      state.cartTotal += Math.round(amount);

      // state.cartTotal.toFixed(2);
    },
  },
});

export const Action = Shop.actions;

export default Shop.reducer;
