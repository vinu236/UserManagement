import { Route ,Routes,Navigate } from "react-router-dom";
import Login from "../Components/Login/Login";
import SignUp from "../Components/Signup/Signup";
import IMG from "../image"
import UserLayout from "../Layout/UserLayout";
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute"
import ImgPage from "../Pages/Img";


const UserRouter=()=>{

    return(
        <>
        <Routes>
        <Route  index  element={<Navigate replace to={"/login"}/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/home" element={<ProtectedRoute><UserLayout/></ProtectedRoute>}/>
            <Route path="/img" element={<ProtectedRoute><ImgPage/></ProtectedRoute>}/>
            
          
        </Routes>
        </>
    )
}

export default UserRouter;