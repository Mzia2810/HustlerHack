import { combineReducers } from "@reduxjs/toolkit";
import appStateSlicer from "./storeSlices/appStateSlicer";
import loginSlice from "./storeSlices/loginSlice";
import notificationSlice from "./storeSlices/notificationSlice";
import packagesSlice from "./storeSlices/packagesSlice";
import paymentSlice from "./storeSlices/paymentSlice";
import userSlicer from "./storeSlices/userSlicer";
export const RootReducer = combineReducers({
    login: loginSlice,
    appState: appStateSlicer,
    notifications: notificationSlice,
    packages: packagesSlice,
    user: userSlicer,
    payment: paymentSlice
})