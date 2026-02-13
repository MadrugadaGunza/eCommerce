import { createAsyncThunk } from "@reduxjs/toolkit";

type AuthType = {
    username: string;
    password: string;
}

export const login = createAsyncThunk('auth/login', async (body: AuthType, { rejectWithValue }) => {
    try {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return rejectWithValue(errorData);
        }

        const { accessToken, refreshToken } = await response.json();
        return { accessToken, refreshToken };
    } catch (error) {
        return rejectWithValue((error as Error).message);
    }
});

export const getUser = createAsyncThunk('auth/get-user', async (token: string, { rejectWithValue }) => {
    try {
        const response = await fetch('https://dummyjson.com/auth/me', {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` },
        });

        if (!response.ok) {
            const error = await response.json();
            return rejectWithValue((error as Error).message);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue((error as Error).message);
    }
});