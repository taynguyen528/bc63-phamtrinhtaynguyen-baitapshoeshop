import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newProduct = action.payload;
            const index = state.cartItems.findIndex(
                (item) => item.id === newProduct.id
            );

            if (index === -1) {
                state.cartItems.push({ ...newProduct, cartQuantity: 1 });
            } else {
                state.cartItems[index].cartQuantity += 1;
            }
        },

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload.id
            );
        },

        incrementQuantity: (state, action) => {
            const index = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            state.cartItems[index].cartQuantity += 1;
        },

        decrementQuantity: (state, action) => {
            const index = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (state.cartItems[index].cartQuantity > 1) {
                state.cartItems[index].cartQuantity -= 1;
            }
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
