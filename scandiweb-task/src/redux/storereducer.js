import { createSlice } from "@reduxjs/toolkit";
import { getCategory, getCurrencies } from "./asyncQueries";
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
      let { name, products } = action.payload.category;
      state.products = products;
      state.categoryName = name;
    },

    [getCurrencies.fulfilled]: (state, action) => {
      state.currencies.navCurrencies = action.payload.currencies;
    },
  },
});

export const Action = Shop.actions;

export default Shop.reducer;
