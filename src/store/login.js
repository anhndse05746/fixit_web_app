import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLogin: false,
        Token: ""
    },
    reducers: {
        login: (login, action) => {
            login.isLogin = action.payload
        },
        // loginSuccess: (login, action) => {
        //     // login.Token = action.payload.token;
        //     console.log(action.payload);
        //     console.log(action);
        // },
        // loginFailed: (login, action) => {
        //     console.log(action.payload);
        //     console.log(action);
        // }
    }
});

// export const getToken = () => apiCallBegan({
//     url: '/login',
//     headers: {
//         phoneNumber: "0987829297",
//         password: "aaa",
//         role_id: "3"
//     },
//     method: "POST",
//     onSuccess: loginSuccess.type,
//     onError: loginFailed.type
// })

export const { login, loginFailed, loginSuccess } = loginSlice.actions;
export default loginSlice.reducer;