import { useState } from "react";
import "./Menu.css";
import { IoMdAddCircle } from "react-icons/io";
import Modal from "../Modal/Modal";
import AddImages from "../AddImages/AddImages";
import { useSelector } from "react-redux";
const Menu = () => {
  const [shows, setShow] = useState(false);
  const toggle=useSelector(store=>store.DragDrop)
  const handleClick = () => {
    setShow(!shows);
  };

    if(toggle) return ;
  return (
    <nav className={`${shows && "active"}`}>
      <Modal>
        <Modal.Open open={"img"}>
          <button className="_btn bg-[#92e3a9]">Add Item</button>
        </Modal.Open>
        <Modal.Window show={"img"}>
          <AddImages/>
        </Modal.Window>
      </Modal>

      <button onClick={handleClick} className="text-[#92e3a9]">
        <IoMdAddCircle className="plus_icon rotate" size={85} />
      </button>
    </nav>
  );
};

export default Menu;
