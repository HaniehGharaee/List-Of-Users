import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import users from "./reducers/userListReducer";

export default configureStore({
    reducer:{users}
});