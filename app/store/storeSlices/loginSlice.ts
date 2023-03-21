import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'
import ApiInstance from '../../apis/AxiosInstance'
import { LOGIN_USER } from '../../apis/EndPoints'
export interface loginState {
    value: number
}

const initialState: loginState = {
    value: 0,
}

export const loginUser = createAsyncThunk(
    'users/login',
    async (action, { getState, dispatch }) => {
        console.log('====================================');
        console.log('ACTION : ', action);
        console.log('====================================');
        const response = await ApiInstance.post(LOGIN_USER, {
            email: '',
            password: ''
        })
        return response.data
    }
)
export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },

    extraReducers(builder) {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            //do what ever you want
        });
        builder.addCase(loginUser.rejected, (state, actione) => {
            //failed
        })
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = loginSlice.actions

export default loginSlice.reducer
