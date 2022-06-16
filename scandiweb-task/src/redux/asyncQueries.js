import Client from "../GQLquery/queryclient";
import {
  QueryCategory,
  QueryCurrencies,
  QuerySigleProduct,
  GetCategory,
  // GetPrice,
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
      let fullPriceArr = [];
      let currencyPrices = {};

      let category = await Client.request(GetCategory);
      let res = await Client.request(QueryCategory, variables);
      res.category.products.forEach((item) => {
        let { id, prices } = item;
        fullPriceArr.push({ id, prices });
      });

      fullPriceArr.forEach((element) => {
        let { id, prices } = element;
        let prodPrice = prices.filter(
          (e) => e.currency.symbol === selectedCurrency
        );
        currencyPrices[id] = { ...prodPrice[0] };
      });

      // console.log(res);

      return { res, category, fullPriceArr, currencyPrices };
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
  async (params, thunkApi) => {
    let shopstate = thunkApi.getState();
    let { loadPrice } = shopstate.shop;
    let { id, addtocart } = params;
    let variables = { id };

    try {
      if (addtocart === false && loadPrice === true) {
        await thunkApi.dispatch(getCategory("all"));
      }

      let res = await Client.request(QuerySigleProduct, variables);

      return { res, addtocart };
    } catch (error) {
      return error;
    }
  }
);

// export const addToCartFromCategory = createAsyncThunk(
//   "addToCartFromCategory",
//   async (pid, thunkApi) => {
//     try {
//       await thunkApi.dispatch(getSingleProduct(pid));

//       return pid;
//     } catch (error) {
//       return error;
//     }
//   }
// );

// export const addToCart = createAsyncThunk(
//   "addToCart",
//   async (pid, thunkApi) => {
//     let variables = { id: pid };
//     let shopstate = thunkApi.getState();
//     let { displayPrice, selectedproduct } = shopstate.shop;
//     let selectedAtt = selectedproduct.selectedAttribute;
//     try {
//       let res = await Client.request(CartProduct, variables);

//       res.product.price = displayPrice[pid];
//       res.product.quantity = 1;
//       res.product.selectedAttribute = selectedAtt;

//       return res.product;
//     } catch (error) {
//       return error.message;
//     }
//   }
// );

// export const getPrice = createAsyncThunk(
//   "getPrice",
//   async (param, thunkApi) => {
//     let shopstate = thunkApi.getState();
//     let { currencies } = shopstate.shop;
//     let { selectedCurrency } = currencies;
//     try {
//       let res = await Client.request(GetPrice);
//       let fullPriceArr = res.categories[0].products;
//       let currencyPrices = {};

//       fullPriceArr.forEach((element) => {
//         let { id, prices } = element;
//         let prodPrice = prices.filter(
//           (e) => e.currency.symbol === selectedCurrency
//         );
//         currencyPrices[id] = { ...prodPrice[0] };
//       });

//       return { fullPriceArr, currencyPrices };
//     } catch (error) {
//       return error;
//     }
//   }
// );
