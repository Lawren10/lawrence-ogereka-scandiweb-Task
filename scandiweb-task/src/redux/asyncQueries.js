import Client from "../GQLquery/queryclient";
import { QueryCategory, QueryCurrencies } from "../GQLquery/queries";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategory = createAsyncThunk("getCategory", async (name) => {
  let variables = { title: name };
  try {
    let res = await Client.request(QueryCategory, variables);
    return res;
  } catch (error) {
    return error;
  }
});

export const getCurrencies = createAsyncThunk("getCurrencies", async () => {
  try {
    let res = await Client.request(QueryCurrencies);
    return res;
  } catch (error) {
    return error;
  }
});
