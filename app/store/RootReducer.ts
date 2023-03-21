import { combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./storeSlices/loginSlice";

export const RootReducer = combineReducers({
    login: loginSlice
})