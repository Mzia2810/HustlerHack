import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import ApiInstance from "../../apis/AxiosInstance";
import { AUTH_TOKEN, C2B_PAYMENT, LIPA_PISSA_ONLINE, PACKAGE, REGISTER_URL } from "../../apis/EndPoints";
import base64 from 'react-native-base64'
import { BusinessNumber, BusinessShortCode, Passkey } from "../../constants/CLIENTS";
import moment from "moment";



export const getAccessToken = createAsyncThunk('getAccessToken/packages', async (action, { getState, dispatch }) => {

    let username = '8MnJl5VD2N5wDjhEPiN9Ks0awdTOAQ4C';
    let password = '8SULFOffZ9fN74M3'
    let encodedCredentials = base64.encode(`${username}:${password}`);
    const response = axios.get(AUTH_TOKEN,
        {
            headers: {
                Accept: 'application/json',
                Authorization: `Basic ${encodedCredentials}`
            }
        }

    ).then((response) => {
        const { status, data } = response;
        console.log('====================================');
        console.log('DATA : ', data);
        console.log('====================================');
        return { status, data }
    }).catch((error: AxiosError) => {
        return error.response
    })

    return response;

});

interface proccedPaymentParams {
    Bearer: string,
    Amount: number;
    Msisdn: string;
    BillRefNumber: string
}
export const proccedPayment = createAsyncThunk('proccedPayment/packages', async (action: proccedPaymentParams, { getState, dispatch }) => {

    const { Amount, Bearer, Msisdn, BillRefNumber } = action;
    let data = JSON.stringify({
        "ShortCode": "4036187",
        "CommandID": "CustomerPayBillOnline",
        "Amount": `${Amount}`,
        "Msisdn": `${Msisdn}`,
        "BillRefNumber": `${BillRefNumber}`
    });


    const response = axios.post(C2B_PAYMENT,
        data,
        {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${Bearer}`,
                'Content-Type': 'application/json',
            }
        }
    ).then((response) => {
        const { status, data } = response;
        return { status, data }
    }).catch((error: AxiosError) => {
        console.error(error.response);

        return error.response
    })

    return response;

});
export const registerUrl = createAsyncThunk('registerUrl/packages', async (action: proccedPaymentParams, { getState, dispatch }) => {

    const { Amount, Bearer, Msisdn, BillRefNumber } = action;
    let data = JSON.stringify({
        "ShortCode": "600980",
        "ResponseType": "Completed",
        "ConfirmationURL": "https://mydomain.com/confirmation",
        "ValidationURL": "https://mydomain.com/validation"
    });


    const response = axios.post(REGISTER_URL,
        data,
        {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${Bearer}`,
                'Content-Type': 'application/json',
            }
        }
    ).then((response) => {
        const { status, data } = response;
        return { status, data }
    }).catch((error: AxiosError) => {
        console.error(error.response);

        return error.response
    })

    return response;

});

interface initiateLipsPissaParams {
    Bearer: string;
    phoneNumber: string;
    Amount: number

}
export const initiateLipsPissa = createAsyncThunk('initiateLipsPissa/packages', async (action: initiateLipsPissaParams, { getState, dispatch }) => {
    const { Amount, Bearer, phoneNumber } = action;
    let Timestamp = `${moment().format('YYYYMMDDHHmmss')}`;
   
    let textingBCode='174379'
    let encodedCredentials = base64.encode(`${BusinessShortCode}${Passkey}${Timestamp}`);
    //password The base64 string is a combination of Shortcode+Passkey+Timestamp)
    //TimeStepps YYYYMMDDHHmmss
    let data = JSON.stringify({

        "BusinessShortCode": BusinessShortCode,
        "Password": encodedCredentials,
        "Timestamp": Timestamp,
        "TransactionType": "CustomerPayBillOnline",
        "Amount": Amount,
        "PartyA": BusinessNumber, //CLIENT NUMBER
        // "PartyA": BusinessNumber, //CLIENT NUMBER
        "PartyB": BusinessShortCode, //CAN BE SHORT CODE
        "PhoneNumber": phoneNumber, //WHO WILL RECEIEVE A PROMT
        // "PhoneNumber": '254708374149', //WHO WILL RECEIEVE A PROMT
        "CallBackURL": "https://mydomain.com/pat",
        "AccountReference": `${phoneNumber} FOR HUSTLERFUND LOAN EXTENSION`,
        "TransactionDesc": "FOR HUSTLERFUND LOAN EXTENSION"

    });


    const response = axios.post(LIPA_PISSA_ONLINE,
        data,
        {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${Bearer}`,
                'Content-Type': 'application/json',
            }
        }
    ).then((response) => {
        const { status, data } = response;
        return { status, data }
    }).catch((error: AxiosError) => {
        console.error(error.response);
        return error.response
    })

    return response;

});

export interface PaymentInitialStates {
    transactionRecords: Array<any>
}
const initialState: PaymentInitialStates = {
    transactionRecords: []
}
const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        addToRecord: (state, action) => {
            state.transactionRecords = state.transactionRecords?.concat(action.payload)
        }
    },
    extraReducers: {

    }
})
export const { addToRecord } = paymentSlice.actions
export default paymentSlice.reducer