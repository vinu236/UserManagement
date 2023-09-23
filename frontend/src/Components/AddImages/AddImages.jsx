import { useState } from "react";
import {validation} from "../../utils/validation"
import  ImgInput from "../ImgInput/ImgInput"
import DisplayImage from "../DisplayImage/DisplayImage";
import toast from "react-hot-toast";
import instance from "../../services/axios";
import  getDataApi  from "../../services/getImageApi";
import { useDispatch } from "react-redux";
import SpinnerMini from "../SpinnerMini/SpinnerMini";

const AddImages=({onClickModal})=>{
const dispatch=useDispatch()
const[data,setData]=useState([]);
const[isLoading,setLoading]=useState(false)
let uid =JSON.parse(localStorage.getItem('user'))
    uid=uid.uid
    console.log(uid)
    
    const handleAddImage=(imgFile)=>{
   
       const array=Array.from(imgFile);
        const newData=array.map((file)=>(
        {
            imgFile:file,
            text:""
        }
        ));

        setData(newData);
        
    }

    console.log(data)

    const handleSubmit=(e)=>{
        e.preventDefault();
        //validation
       const checkText=validation(data);
       if(checkText!==null) return toast.error(checkText) ;
       console.log("Test Passed");

       //form submission;
       const formDataToSend=new FormData();

       data.forEach((file,index)=>{
        formDataToSend.append('img',file.imgFile)
        formDataToSend.append('title',file.text || "");

    })

      postImgApi(formDataToSend)


    }


    const postImgApi=async(datas)=>{
      
        try {
            setLoading(true)
            const {data,status}=await instance.post(`/img/${uid}`,datas);
            if(status==201){
               getDataApi(dispatch);
               console.log(data.message)
               toast.success(data?.message)
            } 
        } catch (error) {
                console.log(error)
        }finally{
            setLoading(false);
            onClickModal()
        }
    }


    const handleTextUpdate=(text,imgIndex)=>{

       const updatedText=data.map((data,index)=>{
            if(index===imgIndex) return {...data,text};

            return data
        })
        setData(updatedText);

    }

   
    if(data.length==0) return <ImgInput handleData={handleAddImage}/>
    return( 
       <form className=" flex flex-col gap-3 bg-text-[#f9fafb]" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="border-2 p-6 min-h-[500px] max-h-[500px] min-w-[800px]  overflow-y-auto flex flex-wrap gap-20 ">
             {data.map((img,index)=><DisplayImage imgFileData={img} handleTextUpdate={handleTextUpdate} key={index} index={index}/>)}
        </div>
            <div className="flex justify-end gap-4">
                <button className="px-[2rem] py-[.6rem] border-2" type="submit" disabled={isLoading}>{isLoading ? <SpinnerMini/> :'Submit'}</button>
                <button  className="px-[2rem] py-[.6rem] border-2" onClick={onClickModal} disabled={isLoading}>Cancel</button>
            </div>
       </form>
    )
}

export default AddImages;