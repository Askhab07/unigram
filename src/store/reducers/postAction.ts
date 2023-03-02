import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseService } from "../../api/api";
import { IPost } from "../../types/IPost";

// Запрос к постам
export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async function () {
    const res = await baseService.get<IPost[]>("/posts")
    return res.data
    }
)

// Удаление постов
export const deletePosts = createAsyncThunk(
    "posts/deletePosts",
    async function (_id: string) {
        const res = await baseService.delete<IPost>(`/posts/${_id}`)
        return _id
    }
)