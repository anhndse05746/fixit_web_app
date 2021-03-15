import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: {isLogin: false},
    reducers: {
        login: (login, action) => {
            login.isLogin = action.payload
        }
    }
});

export const { login } = loginSlice.actions;
export default loginSlice.reducer;