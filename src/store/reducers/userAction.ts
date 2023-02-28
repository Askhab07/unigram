import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseService, setTokenBaseService } from "../../api/api";
import { IUser } from "../../types/IUser";
import Cookies from "js-cookie";


// Авторизация
export const authorization = createAsyncThunk(
    "user/authorization",
    async function (userDate: {username: string, password: string}) {
      const res = await baseService.post<IUser>("/user/sign-in", userDate)
      Cookies.set("token", res.data.token)
      return res.data
});

// Обновление
export const validationToken = createAsyncThunk(
  "user/check",
  async function () {
    const res = await baseService.get<Omit<IUser, "token">>("/user")
    return res.data
});