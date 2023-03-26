import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import moment from "moment";
import ApiInstance from "../../apis/AxiosInstance";
import { PACKAGE, USER_PROFILE } from "../../apis/EndPoints";

const appStateSlice = createSlice({
    name: 'appState',
    initialState: {
        isAgreedTermsAgreed: false,
        isPermissionAgreed: false,
        isPrivacyPolicyAgreed: false,
        otpLife: 3,
        otpReCycleTime: ''
    },
    reducers: {

        changeTermsState: (state, action) => {
            state.isAgreedTermsAgreed = action.payload
        },
        changePermissionState: (state, action) => {

            state.isPermissionAgreed = action.payload
        },
        changePrivacyPolicyState: (state, action) => {

            state.isPrivacyPolicyAgreed = action.payload
        },
        chaneOtpLifeCycle: (state, action) => {
            state.otpLife = action?.payload ? action?.payload : parseInt(`${state.otpLife}`) - 1;
        },
        changeOtpReCycleTime: (state) => {
            state.otpReCycleTime = `${moment()}`
        }

    },
    extraReducers(builder) {

    }
})

export const {
    changeTermsState,
    changePermissionState,
    changePrivacyPolicyState,
    chaneOtpLifeCycle,
    changeOtpReCycleTime
} = appStateSlice.actions
export default appStateSlice.reducer