import useLocalStorage from "./useLocalStorage"
import { useDispatch } from "react-redux";
import { setUserData } from "../Redux/userSlice";
const useUser=()=>{
    const dispatch=useDispatch()

 const[value,setValue]=useLocalStorage('user');
   dispatch(setUserData(value))

    console.log(value)

return{isAuth:value?.authToken}

}

export default useUser;