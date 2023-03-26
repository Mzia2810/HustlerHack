import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Alert } from 'react-native'

import type { PayloadAction } from '@reduxjs/toolkit'
import ApiInstance from '../../apis/AxiosInstance'
import { FORGET_OTP, FORGOT_PASSOWRD, LOGIN_USER, REGSISTER_USER, SEND_OTP } from '../../apis/EndPoints'
import axios, { AxiosError, AxiosResponse } from 'axios';
export interface FormData {
    first_name: string,
    last_name: string,
    email: string,
    dob: string,
    gender: string,
    password: string,
    cnic: string,
    address: string,
    country: string,
    phone: string,
    otp: string,
}
export interface loginState {
    token: string | null;
    user: any,
    userData: FormData

}

export interface loginParams {
    number: number, password: string;
    onSuccess?: () => void;
    onFailed?: () => void;
}
export interface sendOtpParams {
    phone: number
}

interface forgotPasswordParams {
    phone: number | string;
    otp: string;
    password: string
}

export const forgotPassword = createAsyncThunk(
    'forgotPassword/user',
    async (action: forgotPasswordParams, { getState, dispatch }) => {
        const { phone, otp, password } = action || {};
        let result = await ApiInstance.post(FORGOT_PASSOWRD, {
            phone,
            otp,
            password
        }).then(response => {
            const { data, status } = response;
            return { data, status }
        }).catch((error: AxiosError) => {
            return error?.response;

        })

        return result
    }
)

export const sendForgotOtp = createAsyncThunk(
    'sendForgotOtp/user',
    async (action: sendOtpParams, { getState, dispatch }) => {
        const { phone } = action || {};
        let result = await ApiInstance.post(FORGET_OTP, {
            phone,

        }).then(response => {
            const { data, status } = response;
            return { data, status }
        }).catch((error: AxiosError) => {


            return error?.response;

        })

        return result
    }
)
export const sendOtpToPhone = createAsyncThunk(
    'sendOtp/user',
    async (action: sendOtpParams, { getState, dispatch }) => {
        const { phone } = action || {};
        let result = await ApiInstance.post(SEND_OTP, {
            number: phone,

        }).then(response => {
            const { data, status } = response;
            return { data, status }
        }).catch((error: AxiosError) => {


            return error?.response;

        })

        return result
    }
)
export const registerUser = createAsyncThunk(
    'register/user',
    async (action, { getState, dispatch }) => {

        // let data =getState
        let formData = getState()?.login?.userData || {}
        let result = await ApiInstance.post(REGSISTER_USER, formData).then(response => {
            const { data, status } = response;
            return { data, status }
        }).catch((error: AxiosError) => {
            return error?.response;

        })

        return result
    }
)
export const loginUser = createAsyncThunk(
    'login/user',
    async (action: loginParams, { getState, dispatch }) => {
        const { number, password, onFailed, onSuccess } = action;
        let result = await ApiInstance.post(LOGIN_USER, {
            phone: number,
            password: password
        }).then(response => {

            onSuccess && onSuccess()
            const { data, status } = response;
            return { data, status }
        }).catch((error: AxiosError) => {
            onFailed && onFailed()

            return error?.response;

        })

        return result
    }
)


const initialState: loginState = {
    token: null,
    user: null,
    userData: {
        first_name: '',
        last_name: '',
        email: '',
        dob: '',
        gender: '',
        password: '',
        cnic: '',
        address: '',
        country: '',
        phone: '',
        otp: '',
    }
}
export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {

        clearToken: (state) => {
            state.token = null;
        },
        updateSignupForm: (state, action) => {
            state.userData = { ...state.userData, ...action.payload }
        },
        clearForm: (state, action) => {
            state.userData = {
                first_name: '',
                last_name: '',
                email: '',
                dob: '',
                gender: '',
                password: '',
                cnic: '',
                address: '',
                country: '',
                phone: '',
                otp: '',
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.user = 'pendig'
                // state.status = 'loading';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                const { data, status } = action.payload;
                console.log('data', action.payload);
                if (status >= 200 && status < 300) {

                    const { msg, token } = data || {}

                    console.log('STATE : ', state.token);

                    if (token) {
                        state.token = token;
                        state.user = 'TANVEER'
                    }



                } else {
                    const { msg } = data;
                    msg && typeof msg == 'string' && Alert.alert(`${msg}`)
                }
            })
            .addCase(loginUser.rejected, (state, action) => {

            });
        builder
            .addCase(sendOtpToPhone.pending, (state) => {

            })
            .addCase(sendOtpToPhone.fulfilled, (state, action) => {
                const { data, status } = action.payload;

                const { msg } = data || {};
                msg && typeof msg == 'string' && Alert.alert(`${msg}`)
            })
            .addCase(sendOtpToPhone.rejected, (state, action) => {

            });
        //register
        builder
            .addCase(registerUser.pending, (state) => {

            })
            .addCase(registerUser.fulfilled, (state, action) => {
                const { data, status } = action.payload;

                console.log('====================================');
                console.log('SIGNUP : ', action.payload);
                console.log('====================================');
                if (status >= 200 && status < 300) {

                    const { msg, token } = data || {}

                    if (token) {
                        state.token = token;
                        state.user = 'TANVEER'

                    }



                } else {
                    const { msg } = data;
                    msg && typeof msg == 'string' && Alert.alert(`${msg}`)
                }
            })
            .addCase(registerUser.rejected, (state, action) => {

            });
    }


})

// Action creators are generated for each case reducer function
export const { clearToken, updateSignupForm, clearForm } = loginSlice.actions

export default loginSlice.reducer
