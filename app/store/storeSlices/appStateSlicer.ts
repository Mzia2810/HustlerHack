import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import ApiInstance from "../../apis/AxiosInstance";
import { PACKAGE, USER_PROFILE } from "../../apis/EndPoints";

const appStateSlice = createSlice({
    name: 'appState',
    initialState: {
        isAgreedTermsAgreed: false,
        isPermissionAgreed: false,
        isPrivacyPolicyAgreed: false,
    },
    reducers: {

        changeTermsState: (state, action) => {
            state.isAgreedTermsAgreed = action.payload
        },
        changePermissionState: (state, action) => {
            console.log('====================================');
            console.log('action.payload changePermissionState',action.payload);
            console.log('====================================');
            state.isPermissionAgreed = action.payload
        },
        changePrivacyPolicyState: (state, action) => {
            console.log('====================================');
            console.log('action.payload changePrivacyPolicyState',action.payload);
            console.log('====================================');
            state.isPrivacyPolicyAgreed = action.payload
        },

    },
    extraReducers(builder) {

    }
})

export const {
    changeTermsState,
    changePermissionState,
    changePrivacyPolicyState,
} = appStateSlice.actions
export default appStateSlice.reducer