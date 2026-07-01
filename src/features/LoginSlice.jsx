import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: null,
};
const LoginSlice = createSlice({

    name: "login",
    initialState,
    reducers: {
        Login: (state, action) => {
            state.value = action.payload;
        }

        // Define your reducers here
    }
})

export default LoginSlice.reducer;