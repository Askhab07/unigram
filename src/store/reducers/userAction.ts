import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseService, setTokenBaseService } from "../../api/api";
import { IUser } from "../../types/IUser";
import Cookies from "js-cookie";
import { Interface } from "readline";

interface IUserAuth extends IUser { token: string}

// Авторизация
export const authorization = createAsyncThunk(
    "user/authorization",
    async function (userDate: {username: string, password: string}) {
      const res = await baseService.post<IUserAuth>("/user/sign-in", userDate)
      Cookies.set("token", res.data.token)
      return res.data
});

// Обновление
export const validationToken = createAsyncThunk(
  "user/check",
  async function (_, thunkAPI) {
    // try{
      const res = await baseService.get<IUser>("/user")
      // if(res.)
      console.log(res);
      
      return res.data
    // }
});