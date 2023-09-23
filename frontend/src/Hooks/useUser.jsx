import useLocalStorage from "./useLocalStorage"
const useUser=()=>{

 const[value,setValue]=useLocalStorage('user');
    console.log("llllllllllllll");

    console.log(value)

return{isAuth:value?.authToken}

}

export default useUser;