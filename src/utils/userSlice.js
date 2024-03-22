import { createSlice } from "@reduxjs/toolkit";

const userSlice= createSlice({
    name:"user",
    initialState:{
        items:{
            username:"",
            password:"",
            loggedin:false
        }
    },
    reducers:{
        login:(state,action)=>{
              state.items.username=action.payload
              state.items.password=action.payload
              state.items.loggedin = true
        },
        logout:(state,action)=>{
              state.items.username=""
              state.items.password=""
              state.items.loggedin = false
        }
    }

})
export const {login,logout}=userSlice.actions;
export default userSlice.reducer;