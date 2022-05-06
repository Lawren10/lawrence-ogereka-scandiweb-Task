import Client from "../GQLquery/queryclient";
import {
  QueryCategory,
  QueryCurrencies,
  QuerySigleProduct,
  CartProduct,
} from "../GQLquery/queries";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategory = createAsyncThunk(
  "getCategory",
  async (name, thunkApi) => {
    let variables = { title: name };
    let shopstate = thunkApi.getState();
    let { currencies } = shopstate.shop;
    let { selectedCurrency } = currencies;

    try {
      let res = await Client.request(QueryCategory, variables);
      let { products } = res.category;
      let currencyPrices = {};
      let fullPriceArr = [];

      products.forEach((element) => {
        let { prices, id } = element;
        fullPriceArr.push({ id, prices });
      });

      fullPriceArr.forEach((element) => {
        let { id, prices } = element;
        let prodPrice = prices.filter(
          (e) => e.currency.symbol === selectedCurrency
        );
        currencyPrices[id] = { ...prodPrice[0] };
      });

      return { res, currencyPrices, fullPriceArr };
    } catch (error) {
      return error;
    }
  }
);

export const getCurrencies = createAsyncThunk("getCurrencies", async () => {
  try {
    let res = await Client.request(QueryCurrencies);

    return res;
  } catch (error) {
    return error;
  }
});

export const getSingleProduct = createAsyncThunk(
  "getSingleProduct",
  async (pid) => {
    let variables = { id: pid };

    try {
      let res = await Client.request(QuerySigleProduct, variables);
      return res;
    } catch (error) {
      return error;
    }
  }
);

export const addToCart = createAsyncThunk(
  "addToCart",
  async (pid, thunkApi) => {
    let variables = { id: pid };
    let shopstate = thunkApi.getState();
    let { displayPrice } = shopstate.shop;
    try {
      let res = await Client.request(CartProduct, variables);
      res.product.price = displayPrice[pid];
      res.product.quantity = 1;
      return res.product;
    } catch (error) {
      return error;
    }
  }
);
