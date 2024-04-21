
import { createSlice } from "@reduxjs/toolkit";
import shoeData from "../data.json";

const initialState = {
    shoes: shoeData,
};

const shoeSlice = createSlice({
    name: "shoe",
    initialState,
    reducers: {},
});

export default shoeSlice.reducer;
