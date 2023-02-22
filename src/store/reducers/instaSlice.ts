import { createSlice } from "@reduxjs/toolkit";
import { Authorization } from "../../types/IUni";


const initialState: Authorization = {
  user: [],
  isLoading: false,
};

export const instaSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
  },
});
export default instaSlice.reducer;
