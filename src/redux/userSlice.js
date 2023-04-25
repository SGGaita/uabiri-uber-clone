import { createSlice } from "@reduxjs/toolkit";

const initialState ={
userInfo: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers:{
        setUser: (state,action)=>{
            state.userInfo = action.payload
        }
    }
})