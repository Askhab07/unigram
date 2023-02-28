import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseService } from "../../api/api";
import { IPost } from "../../types/IPost";

// Запрос к постам
export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async function () {
    const res = await baseService.get<IPost[]>("/posts")
    console.log(res);
    return res.data
    }
)

// Удаление постов Хабиба
export const deletePosts = createAsyncThunk(
    "posts/deletePosts",
    async function (_id) {
        const res = await baseService.delete<IPost>(`/posts/${_id}`)
        return _id
    }
)