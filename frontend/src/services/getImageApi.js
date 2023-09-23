import instance from "./axios";
import { setImgData } from "../Redux/imgSlice";
let uid =JSON.parse(localStorage.getItem('user'))
    uid=uid.uid;

    
    const getDataApi=async(dispatch)=>{
              
        try {
            const {data,status}=await instance.get(`/img/${uid}`);
            console.log(data)
            if(status === 200) {
                dispatch(setImgData(data?.images))
            }
        } catch (error) {
            console.log(error);
        }
    }
        

export default getDataApi;

