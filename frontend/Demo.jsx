import { useState } from "react";
import { useLocalStorageState } from "./Demo1";

const Demo=()=>{
const[value,setValue]=useLocalStorageState("d","user");
const[count,setCount]=useState(0)
    const handleClick=()=>{

      setValue("hello")

    }


    console.log("home page")
    return(
        <>
        <button onClick={handleClick}>Login</button>
       <p>{value}</p>
        </>
    )
}

export default Demo;