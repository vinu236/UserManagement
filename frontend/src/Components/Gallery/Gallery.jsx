import "./Gallery.css";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import getDataApi from "../../services/getImageApi";
import { setImgData } from "../../Redux/imgSlice";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { useEffect } from "react";
const Gallery = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.Image);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDataApi(dispatch, setImgData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (data.length === 0)
    return (
      <div className=" bg-[#dff7e5] h-[90vh] flex items-center justify-center font-mono text-3xl rounded-xl">
        <p className="font-extrabold text-[#92e3a9] tracking-[12px]">No data ☹️!</p>
      </div>
    );
  return (
    <Droppable droppableId="ImageCard">
      {(provided) => (
        <div
          className="flex justify-evenly"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {data.map((img, index) => {
            return (
                <Draggable key={img._id} index={index} draggableId={img._id}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <Card imgData={img} />
                  </div>
                )}
              </Draggable>
            );
          })}
        {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Gallery;
