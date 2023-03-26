import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { Alert } from "react-native";
import ApiInstance from "../../apis/AxiosInstance";
import { CHANGE_PACKAGE_STATUS, PACKAGE, USER_PROFILE } from "../../apis/EndPoints";

export interface IPackage {
    id: number
    title: string
    price: string
    status: string
    description: string
    package_days: string
    created_at: string
    updated_at?: string
}

export interface initialState {
    packages: Array<IPackage>
}

export const getPackages = createAsyncThunk('getPackages/packages', async (action, { getState, dispatch }) => {

    const response = ApiInstance(PACKAGE).then((response) => {
        const { status, data } = response;
        return { status, data }
    }).catch((error: AxiosError) => {
        return error.response
    })

    return response;

});


export interface changePackageStatusParams {
    package_id: number
}
export const changePackageStatus = createAsyncThunk('changePackageStatus/packages', async (action: changePackageStatusParams, { getState, dispatch }) => {
    const { package_id } = action
    const response = ApiInstance.post(CHANGE_PACKAGE_STATUS, {
        package_id
    }).then((response) => {
        const { status, data } = response;
        dispatch(getPackages())
        return { status, data }
    }).catch((error: AxiosError) => {
        return error.response
    })

    return response;

});
const initialState: initialState = {
    packages: []
}
const packagesSlice = createSlice({
    name: 'packages',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(getPackages.pending, (state, action) => { }).
            addCase(getPackages.fulfilled, (state, action) => {
                const { data, status = 400 } = action.payload || {};
                console.log('action payload', action.payload?.data);

                if (status >= 200 && status < 300) {

                    if (data) {
                        if ('packages' in data) {

                            state.packages = data?.packages;
                            return
                        }
                        state.packages = data;

                    }



                } else {
                    const { msg } = data;
                    msg && typeof msg == 'string' && Alert.alert(`${msg}`)
                }
            }).
            addCase(getPackages.rejected, (state, action) => { })
    }
})

export const { } = packagesSlice.actions
export default packagesSlice.reducer