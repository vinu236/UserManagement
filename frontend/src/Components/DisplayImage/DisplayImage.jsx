import { useState } from "react"
import InputField from "../InputField/inputField";

const DisplayImage=({imgFileData,handleTextUpdate,index})=>{
    const[text,setText]=useState("");
    

    const handleChange=(e)=>{

        setText(e.target.value)
    }
    const handleTextSubmit=()=>{
             handleTextUpdate(text,index);


    }


    return(
        <div className="flex flex-col items-center justify-between  gap-5 border-2 max-w-[300px] py-4 max-h-[300px] mb-10 mr-6 p-4 bg-[#dff7e5] rounded-md shadow-lg ">
        <img src={URL.createObjectURL(imgFileData?.imgFile)} alt="" className="w-[200px] h-[200px] object-cover" />
            <div className="flex items-center justify-center gap max-w-[100%]">
              {!imgFileData.text && <>
                <InputField className="min-w-[20px] h-[70%] py-3 px-2 mr-2 border-[3px] border-[#dff7e5] text-sm focus:outline-[#92e3a9]" placeholder={"Type something..."}  onChange={handleChange} type="text" value={text} required/>
              
              <button type="button" className="px-5 py-2 bg-[#92e3a9] text-sm rounded-md text-[#fff]" onClick={handleTextSubmit}>Submit</button>
              </>}
                {imgFileData.text && <h1 className="tracking-wider text-[#333] font-mono uppercase text-xl p-3">{imgFileData.text}</h1>}
            </div>        
        </div>
    )
}

export default DisplayImage