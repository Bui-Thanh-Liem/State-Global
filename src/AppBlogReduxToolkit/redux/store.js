// From library
import { configureStore } from "@reduxjs/toolkit";

// From my file
import userSlice from "./userSlice";
import postSlice from "./postSlice";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        posts: postSlice.reducer
    }
})

export default store;

