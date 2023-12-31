import { cloneElement, useContext, useState } from "react";
import { createPortal } from "react-dom";
import {HiXMark} from "react-icons/hi2"
import { createContext } from "react";



const ModalContext=createContext()
const Modal=({children})=>{
    console.log("hello")
    const[open,setOpen]=useState("");
    const onClose=()=>setOpen("")
    
   return(
    <ModalContext.Provider value={{open,onClose,setOpen}}>
    {children}
</ModalContext.Provider>
   )


}


const Open=({children,open:openName})=>{
const {setOpen}=useContext(ModalContext);

return cloneElement(children,{onClick:()=>setOpen(openName)})

}






const Window = ({children,show}) => {
const{open,onClose}=useContext(ModalContext)

    if(open!==show) return null;

   return createPortal(
    <div className="fixed top-0 left-0 right-0 bottom-0 z-5000" style={{backgroundColor:"rgba(223, 247, 229,.4)",transition:"all 501s linear"}} onClose={()=>onClose(false)}>
      <div className="fixed top-[49%] left-[49%] translate-x-[-50%] translate-y-[-50%]  px-14 py-14 bg-[#92e3a9] rounded-lg shadow-sm">
        <button onClick={()=>onClose()} className="p-3 border-[.2px] shadow-sm absolute right-2 top-2 rounded-md text-gray-500 active:border-grey-100 active:border-2">
      <HiXMark />
        </button>
        <div >
           {cloneElement(children,{onClickModal:onClose})}
        </div>
      </div>
    </div>,
    document.body)
};




Modal.Open=Open;
Modal.Window=Window;

export default Modal;
