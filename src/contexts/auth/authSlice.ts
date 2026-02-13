import { createSlice } from "@reduxjs/toolkit";
import { getUser, login } from "./authThunk";

type UserType = {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    age: number;
    bank: {
        cardExpire: string;
        cardNumber: string;
        cardType: string;
        currency: string;
        iban: string;
    }
    gender: string;
    role: string;
    phone: string;
    image: string;
    ip: string;
}

type StateType = {
    token: string | null;
    user: UserType | null;
    loading: boolean;
    error: string | null;
}

const initialState: StateType = {
    token: null,
    user: null,
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.token = null;
            state.user = null;
            localStorage.removeItem('token');
        }
    },
    extraReducers: (builder) => {
        // login
        builder.addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.token = action.payload.accessToken;
            localStorage.setItem('token', action.payload.accessToken);
            console.log('action.payload: ', action.payload);
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            console.log('error: ', action.payload);
        });
        // get-user
        builder.addCase(getUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.user = action.payload;
        });
        builder.addCase(getUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;