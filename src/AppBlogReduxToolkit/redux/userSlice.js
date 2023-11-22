import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: "Bùi Thanh Liêm",
        age: 23,
        about: "I am fullstack developer",
        avatar: 'https://i.redd.it/ksmb0m02ppy51.png',
        theme: "#FF0000",
    },
    reducers: {
        updateData: (state, action) => {
            state.user = action.payload.user;
            state.age = action.payload.age;
            state.about = action.payload.about;
            state.avatar = action.payload.avatar;
            state.theme = action.payload.theme;
        }
    }
})

export default userSlice;