import { useState } from "react";
import "./Menu.css";
import { IoMdAddCircle } from "react-icons/io";
import Modal from "../Modal/Modal";
import AddImages from "../AddImages/AddImages";
const Menu = () => {
  const [shows, setShow] = useState(false);

  const handleClick = () => {
    setShow(!shows);
  };

  return (
    <nav className={`${shows && "active"}`}>
      <Modal>
        <Modal.Open open={"img"}>
          <button className="_btn">Add Item</button>
        </Modal.Open>
        <Modal.Window show={"img"}>
          <AddImages/>
        </Modal.Window>
      </Modal>

      <button onClick={handleClick}>
        <IoMdAddCircle className="plus_icon rotate" size={85} />
      </button>
    </nav>
  );
};

export default Menu;
