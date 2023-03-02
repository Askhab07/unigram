import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitUserState, IUser } from "../../types/IUser";
import { authorization, validationToken } from "./userAction";


const initialState: InitUserState = {
  user: {
    username: "",
    avatar: "",
    _id: ""
  },
  isLoading: false,
  isAuth: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutReducer: (state) => {
      state.isAuth = false
      state.isLoading = false
      state.user = {
        username: "",
        avatar: "",
        _id: ""
      }
    }
  },
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
    builder.addCase(validationToken.fulfilled, (state, action: PayloadAction<IUser>) => {
      state.isAuth = true;
      state.user = action.payload;
      state.isLoading = false;
    })
    // builder.addCase(validationToken.rejected, (state) => {
    //   state.isLoading = false;
    // })
  },
});

export default userSlice.reducer;

// export const {logoutReducer} = userSlice.actions;