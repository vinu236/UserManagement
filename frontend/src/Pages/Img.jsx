import Gallery from "../Components/Gallery/Gallery";
import Menu from "../Components/Menu/Menu";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { setImgData } from "../Redux/imgSlice";
import ConfirmReOrder  from "../Components/ConfirmReorder/ConfirmReorder"
import { setDragDropIndex } from "../Redux/DragDropSlice";


const ImgPage=()=>{
    const dispatch = useDispatch();
    const data = useSelector((store) => store.Image);
    const toggle= useSelector(store => store.DragDrop)
 
  
    function handleOnDragEnd(result) {
        if(!result.destination) return;
        console.log(result)
        if(result?.destination?.index===result?.source?.index) return;
       const copyData=[...data];
       const [draggedData]=copyData.splice(result?.source?.index,1);
       copyData.splice(result.destination.index,0,draggedData);
       dispatch(setImgData(copyData));
      if(!toggle) dispatch(setDragDropIndex({destinationIndex:result.destination.index,sourceIndex:result.source.index,previousData:data}))
    }

    return(
        <main className=" flex justify-center items-start p-10 h-[100vh] bg-[#dff7e5]">
            <DragDropContext onDragEnd={handleOnDragEnd}>
            <Gallery/>
            </DragDropContext>
            <Menu/>
            <ConfirmReOrder/>
        </main>
    )
}

export default ImgPage;