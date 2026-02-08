import { configureStore } from "@reduxjs/toolkit";
import rootRedcers from "./root-reducers";
import { useDispatch, useSelector } from "react-redux";

const store = configureStore({ reducer: rootRedcers });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;