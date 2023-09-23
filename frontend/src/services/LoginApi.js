import toast from "react-hot-toast";
import instance from "../services/axios";




const LoginApi=async (formValues,setIsLoading,setFormValues,initialFormValues,setValue,dispatch,setUserData,navigate)=>{
    
    try {
        setIsLoading(true)
        const {data,status}=await instance.post('/login',formValues);
        if(status===200){
           localStorage.setItem('user',JSON.stringify(data))
           dispatch(setUserData(data));
        navigate("/home", { replace: true })
        }
    } catch (error) {
        console.log(error)
        if(error && error.response?.data){
            toast.error(error.response.data)
        }
    }finally{
        setIsLoading(false);
        setFormValues(initialFormValues)
    }
}


export default LoginApi