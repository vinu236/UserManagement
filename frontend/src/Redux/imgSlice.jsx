import {createSlice} from "@reduxjs/toolkit"

const imageSlice=createSlice({
    name:"images",
    initialState:[],
    reducers:{
        setImgData:(state,action)=>{
               console.log(action.payload)
            return action.payload
        }
    }
})
    
export const{setImgData}=imageSlice.actions;
export default imageSlice.reducer;
