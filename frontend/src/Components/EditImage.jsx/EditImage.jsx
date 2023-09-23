import InputField from "../InputField/inputField";
import { useEffect, useRef, useState } from "react";
import instance from "../../services/axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import getDataApi from "../../services/getImageApi";
import SpinnerMini from "../SpinnerMini/SpinnerMini"
const EditImage = ({id,onClickModal}) => {
//   const [img, setImg] = useState(null);
let uid =JSON.parse(localStorage.getItem('user'))
    uid=uid.uid;
const initialFormValues={imgPath:"",title:""}
  const [newImg, setNewImg] =useState(false);
  const[isLoading,setLoading]=useState(false)
  const [formValues,setFormValues]=useState(initialFormValues);
  const dispatch=useDispatch()
  const ref = useRef();
  const data=useSelector(store=>store.Image)

  useEffect(()=>{
    getSingleApi(data,id)
  },[])



  const getSingleApi=(data,id)=>{
    
    
      const filterData=data.filter((img,index)=>{
        return img._id===id
      })
  console.log(filterData[0]);
      
  setFormValues({...formValues,imgPath:filterData[0].url,title:filterData[0].title})
     
  }
  


  const handleChange = (e) => {
   if(e.target.name==='imgPath'){
        setNewImg(URL.createObjectURL(e.target.files[0]));
        setFormValues({...formValues,[e.target.name]:e.target.files[0]})
   }else{
        setFormValues({...formValues,[e.target.name]:e.target.value})

   }    
  };    

  console.log(formValues)
  const handleClick = () => {
    
    console.log(ref.current)
    ref.current?.click();
  };


  const onSubmit=(e)=>{

    e.preventDefault();
    const dataToSend=new FormData();
    dataToSend.append('img_id',id)
    dataToSend.append('img',formValues.imgPath);
    dataToSend.append('title',formValues.title);
    
    postEditedApi(dataToSend)
    

  }

  const postEditedApi=async(dataToSend)=>{
    try {
      setLoading(true)
      const {data,status}=await instance.put(`/img/${uid}`,dataToSend);
      if(status===200) getDataApi(dispatch)
    } catch (error) {
      console.log(error)
    }finally{ 
        setLoading(false);
        onClickModal()
    }
  }




  return (
    <div className="p-3 min-w-[400px] min-h-[300px] border-[1px] border-[#bbb] bg-[#f9fafb]">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-9 ">
        <div className="flex flex-row-reverse justify-around items-center"> 
          <InputField label={"Heading"} value={formValues.title} onChange={handleChange} name={"title"} labelClass={"text-xl font-mono"} 
          className={"border-[2px] px-3 py-2 rounded-sm text-[16px] font-mono"}
          disabled={isLoading}
          />
        </div> 
        <div className="flex justify-start ml-[20px] gap-12 items-center text-xl font-mono mb-16">
          <label htmlFor="" className="">Label</label>
          <img
            src={`${newImg ? newImg : formValues.imgPath}`}
            alt=""
            className="min-w-[100px] max-w-[120px] min-h-[100px] max-h-[150px] ml-4"
            onClick={handleClick}
          />
          <input
            type="file"
            className="hidden"
            ref={ref}
            onChange={handleChange}
            name="imgPath"
            disabled={isLoading}
          />
        </div>
        </div>
        <div className="flex justify-end gap-4">
          <button className="px-5 py-2 border-2" disabled={isLoading}>{isLoading ? <SpinnerMini/> : "Submit"}</button>
          <button className="px-5 py-2 border-2" disabled={isLoading} onClick={onClickModal}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditImage;
