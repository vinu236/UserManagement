import Modal from "../Modal/Modal";
import {AiTwotoneDelete} from "react-icons/ai"
import {AiFillEdit} from "react-icons/ai"
import EditImage from "../EditImage.jsx/EditImage";
import DeleteOperation from "../DeleteOperation/DeleteOperation";


const Operation=({id})=>{


    return(
      <Modal>
            <Modal.Open open="edit">
                <button className="px-2 py-2 border-[1px] border-[#92e3a9] rounded-[80%] h-[50px] w-[50px]  flex items-center justify-center mr-4 transition-all hover:scale-110"><AiFillEdit className="text-[#92e3a9]"/></button>
            </Modal.Open>
            <Modal.Window show="edit">
              <EditImage id={id}/>
            </Modal.Window>

            <Modal.Open open="delete">
                <button className="px-2 py-2 border-[1px] border-[#92e3a9] rounded-[80%] h-[50px] w-[50px] flex justify-center items-center  transition-all hover:scale-110"><AiTwotoneDelete className="text-[#92e3a9]"/></button>
            </Modal.Open>
            <Modal.Window show={'delete'}>
              <DeleteOperation id={id}/>
            </Modal.Window>

      </Modal>
    )
}

export default Operation;