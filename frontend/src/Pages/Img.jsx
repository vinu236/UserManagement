import Gallery from "../Components/Gallery/Gallery";
import Menu from "../Components/Menu/Menu";
import { DragDropContext } from "react-beautiful-dnd";

const ImgPage=()=>{
    function handleOnDragEnd(result) {
        alert("d")
        console.log(result)
    }

    return(
        <main className="p-6">
            <DragDropContext onDragEnd={handleOnDragEnd}>
            <Gallery/>
            </DragDropContext>
            <Menu/>
        </main>
    )
}

export default ImgPage;