import { useState } from "react";
import instance from "../../services/axios";
import ConfirmDelete from "../Delete/ConfrimDelete";
import getDataApi from "../../services/getImageApi";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const DeleteOperation=({onClickModal,id:img_id})=>{
    let uid =JSON.parse(localStorage.getItem('user'))
    uid=uid.uid;
    const[isLoading,setLoading]=useState(false);
    const dispatch=useDispatch()
    const handleClickDelete=()=>{   
       deleteImgApi();
    }


    const deleteImgApi=async()=>{
        try {
            setLoading(true)
            const {data,status}=await instance.delete(`/img/${uid}/${img_id}`);
            console.log(data);
            if(status==200){
                getDataApi(dispatch);
                toast.success(data?.message)
            }
            
        } catch (error) {
                console.log(error)
        }finally{
            setLoading(false);
            onClickModal()
        }
    }


    return<ConfirmDelete resourceName={"Image"} onClickModal={onClickModal} onClick={handleClickDelete} Loading={isLoading}/>
}


export default DeleteOperation