import { configureStore, combineReducers } from "@reduxjs/toolkit";
import instaSlice from './reducers/userSlice';
import postSlice from "./reducers/postSlice";

const rootReducer = combineReducers({
    user: instaSlice,
    posts: postSlice
});

export const store = configureStore({
    reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;