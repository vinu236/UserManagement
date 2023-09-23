import Row from "../Row/Row";
import { Link } from "react-router-dom";
import userAvatar from "../../assets/imgs/user-avatar.png";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const UserCard=()=>{

    const userData=useSelector(store=>store);
    const navigate=useNavigate()
    console.log(userData)

    const handleLogout=()=>{
        localStorage.removeItem('user');
        navigate('/login',{replace:true})
    }

    return(
        <Row className="bg-slate-300 p-10 flex-wrap">
        <div className="p-3  border-4 flex gap-6 items-center">
            <img src={userAvatar} alt="" className="w-32"/>
            <div className="flex flex-col gap-4">
                <h2>
                    <span>Email :</span>
                    <span> ajithvinu@gmail.com</span>
                </h2>
            <Link>Update Password</Link>
                    <p onClick={handleLogout} className="px-3 rounded-md bg-[#92e3a9] py-2 w-[50%] text-center cursor-pointer active:translate-y-1 transition-all">Logout</p>
            </div>
        </div>
        <Link to="/img" className="border-4 flex items-center hover:opacity-[.5] cursor-pointer">
        <div className="p-3  ">
             <h1 className="text-md text-xl font-semibold ">Image upload section</h1>
        </div>
        </Link>
        </Row>
    )
}

export default UserCard;