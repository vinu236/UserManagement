import { useState } from "react";
import LoginApi from "../services/LoginApi";
import useLocalStorage from "./useLocalStorage";
import { useDispatch } from "react-redux";
import { setUserData } from "../Redux/userSlice";
import { useNavigate } from "react-router-dom";

const useLogin=()=>{

    const initialFormValues={ email:"", password:""}
    const[formValues,setFormValues]=useState(initialFormValues);
    const[isLoading,setIsLoading]=useState(false);
    const [value,setValue]=useLocalStorage('user');
    const dispatch=useDispatch();
    const navigate=useNavigate()
    

    const handleChange=(e)=>{  
        console.log(e.target.value)
        const{name,value}=e.target;
        setFormValues({...formValues,[name]:value})
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      LoginApi(formValues,setIsLoading,setFormValues,initialFormValues,setValue,dispatch,setUserData,navigate)
  }

  return [handleChange,formValues,handleSubmit,isLoading]

}


export default useLogin;