import { useEffect } from "react";
import useUser from "../../Hooks/useUser";
import { useNavigate } from "react-router-dom";

const ProtectedRoute=({children})=>{
    const navigate=useNavigate()

    const{isAuth}=useUser()

    useEffect(()=>{
        if(!isAuth){
            navigate('/login',{replace:true})
        }
    },[isAuth]);


   if(isAuth) return children

}


export default ProtectedRoute