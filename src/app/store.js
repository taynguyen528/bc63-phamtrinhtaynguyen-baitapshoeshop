import { configureStore } from "@reduxjs/toolkit";
import shoeReducer from "../features/shoeSlice";
import cartReducer from "../features/cartSlice";

export const store = configureStore({
    reducer: {
        shoe: shoeReducer,
        cart: cartReducer,
    },
});
