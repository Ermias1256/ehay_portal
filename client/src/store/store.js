import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
// import { createWrapper } from "next-redux-wrapper";
import { cryptoApi } from "../api/cryptoApi";
import { cryptoNewsApi } from "../api/cryptoNewsApi";

export const store = createStore(reducers, compose(applyMiddleware(thunk)));
// const makeStore = () => store;

// export const wrapper = createWrapper(makeStore);

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});
