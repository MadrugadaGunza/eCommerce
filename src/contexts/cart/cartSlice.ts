import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, { ...action.payload, quantity: 1 }]
        },
        clearCart: (state) => {
            console.log(state)
        }
    },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;