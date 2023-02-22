import { configureStore, combineReducers } from "@reduxjs/toolkit";
import instaSlice from './reducers/instaSlice';

const rootReducer = combineReducers({
    // todos: instaSlice
});

export const store = configureStore({
    reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;