import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Redux/userSlice";
import imgSlice from "./imgSlice";




const store=configureStore({
    reducer:{
        user:userSlice,
        Image:imgSlice
        
    }
})


export default store