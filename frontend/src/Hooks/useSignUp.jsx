import { useState } from "react";
import SignUpApi from "../services/SignupApi";
import { useNavigate } from "react-router-dom";
import {signUpValidation} from "../utils/validation"
import toast from "react-hot-toast";

const useSignUp=()=>{

    const initialFormValues = { email: "", password: "", confirmPassword: "" };
    const [formValues,setFormValues] =useState(initialFormValues);
    const[isLoading,setIsLoading]=useState(false)
    const navigate=useNavigate()


    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormValues({...formValues,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const validationCheck=signUpValidation(formValues.password,formValues.confirmPassword)

        if(validationCheck!==null) return toast.error(validationCheck)
      SignUpApi(formValues,setFormValues,initialFormValues,setIsLoading,navigate)
    
    }
   

    return [handleChange,formValues,handleSubmit,isLoading]
}

export default useSignUp;