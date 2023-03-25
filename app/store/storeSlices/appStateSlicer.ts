import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import ApiInstance from "../../apis/AxiosInstance";
import { PACKAGE, USER_PROFILE } from "../../apis/EndPoints";

interface userAction {

}



const appStateSlice = createSlice({
    name: 'appState',
    initialState: {
        isAgreedTerms: false,
    },
    reducers: {

    },
    extraReducers(builder) {

    }
})

export const { } = appStateSlice.actions
export default appStateSlice.reducer