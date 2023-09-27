import Modal from "../Modal/Modal";
import {  useSelector,useDispatch } from "react-redux";
import { setImgData } from "../../Redux/imgSlice";
import { setDragDropIndex } from "../../Redux/DragDropSlice";
import instance from "../../services/axios";
const ConfirmReOrder=()=>{
const toggle=useSelector(store=>store.DragDrop);
const userData=useSelector(store=>store.user)
const reArrangedImage=useSelector(store=>store.Image)
const dispatch=useDispatch()



    const handleClickCancel=()=>{
        dispatch(setImgData(toggle?.previousData));
        dispatch(setDragDropIndex(null))
    }

    const handleSubmit=()=>{
       submitForm()

    }

    const submitForm=async()=>{
        try {
            console.log(reArrangedImage)
            
            const data=await instance.put(`/img/reorder/${userData.uid}`,reArrangedImage);
            console.log(data)
        } catch (error) {
            console.log(error)
        } finally{

        }
    }


    if(!toggle) return ;
    return (
        <div className="fixed top-[87%] bg-[#dff7e5] left-0 w-[100%] bottom-0 flex flex-col justify-center items-end">
            <div className="flex gap-10 mr-7 ">
                <button className="px-4 py-2  bg-[#92e3a9] text-center cursor-pointer active:translate-y-1 transition-all rounded-sm" onClick={handleSubmit}>Submit</button>
                <button className="px-4 py-2  bg-[#92e3a9] text-center cursor-pointer active:translate-y-1 transition-all rounded-sm" onClick={handleClickCancel}>Cancel</button>
            </div>
        </div>
    );
}

export default ConfirmReOrder;