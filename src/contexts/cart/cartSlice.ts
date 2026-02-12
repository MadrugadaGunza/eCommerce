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
            // Verificar se o producto já esta no carrinho
            const productAlredyInCart = state.items.some((item) => item.id === action.payload.id);

            if (productAlredyInCart) {
                state.items = state.items.map((item) =>
                    item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item);

                return;
            }

            state.items = [...state.items, { ...action.payload, quantity: 1 }]
        },
        clearCart: (state) => {
            state.items = []
        }
    },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;