import Modal from "../Modal/Modal";
import {AiTwotoneDelete} from "react-icons/ai"
import {AiFillEdit} from "react-icons/ai"
import EditImage from "../EditImage.jsx/EditImage";
import DeleteOperation from "../DeleteOperation/DeleteOperation";


const Operation=({id})=>{


    return(
      <Modal>
            <Modal.Open open="edit">
                <button className="px-2 py-2 border-[1px] rounded-[80%] h-[50px] w-[50px]  flex items-center justify-center mr-4"><AiFillEdit/></button>
            </Modal.Open>
            <Modal.Window show="edit">
              <EditImage id={id}/>
            </Modal.Window>

            <Modal.Open open="delete">
                <button className="px-2 py-2 border-[1px] rounded-[80%] h-[50px] w-[50px] flex justify-center items-center"><AiTwotoneDelete/></button>
            </Modal.Open>
            <Modal.Window show={'delete'}>
              <DeleteOperation id={id}/>
            </Modal.Window>

      </Modal>
    )
}

export default Operation;