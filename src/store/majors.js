import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const majorSlice = createSlice({
    name: "major",
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        majorRequestStart: (majors, action) => {
            console.log(action);
        },
        majorReceived: (majors, action) => {
            majors.list = action.payload;
            console.log(action);
        },
        majorRequestFailed: (majors, action) => {
            console.log(action);
        },
        addMajor: (major, action) => {
            major.list.push(action.payload);
        }
    }
});

export const { majorRequestFailed, majorReceived, majorRequestStart, addMajor } = majorSlice.actions;
export default majorSlice.reducer;

export const getList = () => apiCallBegan({
    url: '/api/getMajor',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjA5ODc4MjkyOTciLCJyb2xlX2lkIjozLCJpYXQiOjE2MTYyMzQ4NzcsImV4cCI6MTYxNjIzODQ3N30.h8CyX_0U7TDfFfPt3pWwc7DBjRLnx67lF2Ya0EJcaEA'
    },
    onSuccess: majorReceived.type,
    onError: majorRequestFailed.type,
    onStart: majorRequestStart.type
})

