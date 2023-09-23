import UserRouter from "./router/UserRouter";
import { Routes,Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';




console.log("hello world")
const App=()=>{

  return(
   <>
   
     <Routes>
      <Route path="/*" element={<UserRouter/>}/>
    </Routes>
    
       <Toaster position='top-center' gutter={22} toastOptions={{
        success:{
          duration:3000
        },
        error:{
          duration:5000
        }
      }}/> 
   </>
  )
}


export default App;