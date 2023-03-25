import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import ApiInstance from "../../apis/AxiosInstance";
import { PACKAGE, USER_PROFILE } from "../../apis/EndPoints";

interface userAction {

}



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
            state.isPermissionAgreed = action.payload
        },
        changePrivacyPolicyState: (state, action) => {
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