import Row from "../Row/Row";
import "./Gallery.css"
import Card from "../Card/Card";
import { useState, useEffect} from "react";
import { useDispatch, useSelector  } from "react-redux";
import  getDataApi  from "../../services/getImageApi";
import { setImgData } from "../../Redux/imgSlice";
import store from "../../Redux/store";

const Gallery=()=>{
    
    const dispatch=useDispatch();
    const data =useSelector(store=>store.Image)    
    
    useEffect(()=>{
        const fetchData=async()=>{
        
            try {
                const data=await getDataApi(dispatch,setImgData);
            
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[])
    

if(data.length===0)return <div className=" h-[90vh] flex items-center justify-center font-mono text-3xl "><p>No data ☹️!</p></div>
    return(
        <div className="flex justify-evenly">
           {data.map((img)=><Card imgData={img} key={img._id} />)}
        </div>
    )
}
 
export default Gallery;