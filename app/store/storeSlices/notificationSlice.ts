import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import ApiInstance from "../../apis/AxiosInstance";
import { PACKAGE, USER_PROFILE } from "../../apis/EndPoints";

interface IinitialState {
    notifications: Array<any>
}

const getAppNotifications = createAsyncThunk('user/notification', async (action, { getState, dispatch }) => {

    const response = ApiInstance(PACKAGE).then((response) => {
        const { status, data } = response;
        return { status, data }
    }).catch((error: AxiosError) => {
        return error.response
    })

    return response;

});
const initialState: IinitialState = {
    notifications: [
        {
            id: 1,
            text: 'sdgergetg orep epsum sdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsum',
            date: '02/23/2023',
            time: '19:09',
        },
        {
            id: 2,
            text: 'sdgergetg orep epsum sdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsum',
            date: '02/23/2023',
            time: '19:09',
        },
        {
            id: 3,
            text: 'sdgergetg orep epsum sdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsum',
            date: '02/23/2023',
            time: '19:09',
        },
    ]
}
const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(getAppNotifications.pending, (state, action) => { }).
            addCase(getAppNotifications.fulfilled, (state, action) => {
                const { data, status } = action.payload || {};
                console.log('action payload', action.payload?.data);

                // console.log('data', action.payload);
                // if (status >= 200 && status < 300) {

                //     const { msg, token } = data || {}

                //     console.log('STATE : ', state.token);

                //     if (token) {
                //         state.token = token;
                //         state.user = 'TANVEER'

                //     }



                // } else {
                //     const { msg } = data;
                //     msg && typeof msg == 'string' && Alert.alert(`${msg}`)
                // }
            }).
            addCase(getAppNotifications.rejected, (state, action) => { })
    }
})

export const { } = notificationSlice.actions
export default notificationSlice.reducer