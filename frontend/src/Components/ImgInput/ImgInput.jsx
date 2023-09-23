import InputField from "../InputField/inputField";
import uploadImg from "../../assets/imgs/cloud-upload.png";
import { useRef, useState } from "react";

const ImgInput=({handleData})=>{
    const ref=useRef();
    const [activeDrag,setActiveDrag]=useState(false)
    const handleChange=(e)=>{
        // console.log(e.target.files);
        handleData(e.target.files)
    }

    const onDragEnter=()=>setActiveDrag(true);
    const onDragLeave=()=>setActiveDrag(false);
    const onDrop=()=>setActiveDrag(false)
   
    return(
        <div
         className={`min-h-[300px]
          min-w-[500px] border-[1px] 
          flex flex-col items-center 
          justify-center cursor-pointer 
          relative ${activeDrag && "opacity-[0.5] bg-blue-100"}`} ref={ref} 
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
            >
            <input 
            type="file" 
            name="img" 
            onChange={handleChange} 
            multiple accept={'image/*'}  
            alt="image_input_file" 
            className="opacity-0 absolute w-[100%] h-[100%]" 
            title=""/>
            <img src={uploadImg} alt="" />
            <p 
            className="text-[#aaa]" >
            Drag && Drop Images
            </p>

        </div>
    )
}


export default ImgInput