import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../slices/counterSlice";

// 1. creating store
const store = configureStore({
    reducer: { counterReducer }
});

export default store;