import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { Alert } from "react-native";
import ApiInstance from "../../apis/AxiosInstance";
import { USER_PROFILE } from "../../apis/EndPoints";

export interface User {
    address: string
    cnic: number
    country: string
    created_at: string
    dob: string
    email: string
    email_verified_at: any
    first_name: string
    gender: string
    id: number
    is_phone_verified: number
    last_name: string
    phone: string
    updated_at: string
}

export interface userInitialStates {
    user: null | User
}

export const getUserData = createAsyncThunk('user/data', async (action, { getState, dispatch }) => {

    const response = await ApiInstance(USER_PROFILE).then((response) => {
        const { status, data } = response;
        return { status, data }
    }).catch((error: AxiosError) => {
        return error.response
    })

    const { status, data } = response
    return { status, data };

});


const initialState: userInitialStates = {
    user: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(getUserData.pending, (state, action) => { }).
            addCase(getUserData.fulfilled, (state, action) => {
                const { data, status } = action.payload || {};

                if (status >= 200 && status < 300) {
                    if (data) {
                        state.user = data;
                    }

                } else {
                    const { msg } = data || {};
                    msg && typeof msg == 'string' && Alert.alert(`${msg}`)
                }
            }).
            addCase(getUserData.rejected, (state, action) => { })
    }
})

export const { } = userSlice.actions
export default userSlice.reducer