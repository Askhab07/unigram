import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseService } from "../../api/api";

// Запрос
export const authorization = createAsyncThunk(
    "user/authorization",
    async function (userDate: {username: string, password: string}) {
      const res = await baseService.post("/user/sign-in", userDate)
  
      return await res.data
  });
