import {createSlice} from "@reduxjs/toolkit"

const DragDropSlice=createSlice({
    name:"DragDrop",
    initialState:null,
    reducers:{
        setDragDropIndex:(state,action)=>{
              
            return action.payload
        }
    }
})
    
export const{setDragDropIndex}=DragDropSlice.actions;
export default DragDropSlice.reducer;
