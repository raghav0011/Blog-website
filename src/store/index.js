import { configureStore } from "@reduxjs/toolkit";
import { userReducers } from "./reducers/userReducers";

const userInfoFromStorage = localStorage.getItem('account') ? JSON.parse(localStorage.getItem('account')) : null;

const initialState = {
    user: { userInfo: userInfoFromStorage }
}

const store = configureStore({
    reducer: {
        user: userReducers
    },
    preloadedState: initialState
})

export default store;