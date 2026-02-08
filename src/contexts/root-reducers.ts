import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from './cart/cartSlice';

const rootRedcers = combineReducers({
    cart: cartSlice
});

export default rootRedcers;