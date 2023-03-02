import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitPostState, IPost } from "../../types/IPost";
import { getPosts, deletePosts } from "./postAction";

const initialState: InitPostState = {
  posts: [],
  isLoading: false,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getPosts.fulfilled,
      (state, action: PayloadAction<IPost[]>) => {
        state.posts = action.payload;
        state.isLoading = false;
      });

      builder.addCase(deletePosts.pending, (state) => {
        state.isLoading = true;
      });
      
      builder.addCase(deletePosts.fulfilled, (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.posts = state.posts.filter(post => post._id !== action.payload);
        });
  }
});

export default postSlice.reducer