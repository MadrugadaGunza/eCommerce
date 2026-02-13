import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from './cart/cartSlice';
import authSlice from './auth/authSlice';

const rootRedcers = combineReducers({
    cart: cartSlice,
    auth: authSlice,
});

export default rootRedcers;