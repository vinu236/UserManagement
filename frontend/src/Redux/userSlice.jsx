import {createSlice} from "@reduxjs/toolkit"

const userSlice=createSlice({
    name:"user",
    initialState:{},
    reducers:{
        setUserData:(state,action)=>{
            console.log(action)
            return action.payload
        }
    }
})

console.log(userSlice)
export const{setUserData}=userSlice.actions;
export default userSlice.reducer;
