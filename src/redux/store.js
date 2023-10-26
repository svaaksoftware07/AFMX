import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./featurs/authSlice"

export default configureStore({
    reducer:{
        auth:AuthReducer,
    }
});