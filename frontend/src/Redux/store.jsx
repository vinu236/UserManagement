import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Redux/userSlice";
import imgSlice from "./imgSlice";
import DragDropSlice from "./DragDropSlice";




const store=configureStore({
    reducer:{
        user:userSlice,
        Image:imgSlice,
        DragDrop:DragDropSlice
        
    }
})


export default store