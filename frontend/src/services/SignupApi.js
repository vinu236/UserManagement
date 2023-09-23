import toast from "react-hot-toast";
import instance from "./axios";


const SignUpApi=async({confirmPassword , ...formValues},setFormValues,initialFormValues,setIsLoading,navigate)=>{

  try {
    setIsLoading(true)
    const {status}=await instance.post('/sign-up',formValues);
    if(status===201){
        toast.success('Account is successfully Created');
        navigate('/login')
    }   
  } catch (error) {
    console.log(error)
    if(error && error.response.data){
       toast.error(error.response.data)
    }
  }finally{
    setFormValues(initialFormValues);
    setIsLoading(false)
  }
    

   
}

export default SignUpApi;