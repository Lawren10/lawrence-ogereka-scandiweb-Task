import { configureStore } from "@reduxjs/toolkit";
import Shop from "./storereducer";
const store = configureStore({
  reducer: {
    shop: Shop,
  },
});

export default store;
