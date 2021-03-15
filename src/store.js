import loginSlice from "./store/login";
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    login: loginSlice,
  }
})