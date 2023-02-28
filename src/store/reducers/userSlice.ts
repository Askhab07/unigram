import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { InitUserState, IUser } from "../../types/IUser";
import { authorization, validationToken } from "./userAction";


const initialState: InitUserState = {
  user: {
    username: "",
    avatar: "",
    _id: "",
    token: Cookies.get("token") || "",
  },
  isLoading: false,
  isAuth: false
};

export const userSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authorization.pending, (state) => {
      state.isLoading = true;
      state.isAuth = false;
    })
    builder.addCase(authorization.fulfilled, (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isAuth = true;
      state.isLoading = false;
    })

    builder.addCase(validationToken.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(validationToken.fulfilled, (state, action: PayloadAction<Omit<IUser,"token">>) => {
      state.isAuth = true;
      state.user = {...action.payload, token: state.user.token};
      state.isLoading = false;
    })
    builder.addCase(validationToken.rejected, (state) => {
      state.isLoading = false;
    })
  },
});

export default userSlice.reducer;
