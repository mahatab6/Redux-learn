import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"
import postReducer from "../features/posts/postSlice"
import postsReducer from "../features/dataFetching/postsSlice";



export const store = configureStore({
    reducer:{
        post: postReducer,
        counter: counterReducer,
        posts: postsReducer
    }
})