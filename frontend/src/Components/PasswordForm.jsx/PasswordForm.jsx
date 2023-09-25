import { useState } from "react";
import instance from "../../services/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const PasswordForm = ({onClickModal}) => {
    let uid =JSON.parse(localStorage.getItem('user'))
    uid=uid.uid;
    const initialValues={oldPassword:"",newPassword:""}
    const[formValues,setFormValues]=useState(initialValues);
    const navigate=useNavigate()

  const  handleSubmit=()=>{

        submitForm(formValues)
    }

    const submitForm=async(formValues)=>{
        
        try {
            const {data,status}=await instance.post(`/updatePassword/${uid}`,formValues);
            if(status===200){
                localStorage.removeItem('user')
                navigate("/login",{replace:true})
                toast.success("Successfully Update the Password")
            }
        } catch (error) {
                console.log(error)
        }
    }



const handleChange=(e)=>{
    const{name,value}=e.target;

    setFormValues({...formValues,[name]:value})
}


  return (
    <div>
      <h1 className="text-xl font-mono font-semibold mb-9 px-3 " >Update Password</h1>
      <div className="grid grid-cols-2 gap-x-0 gap-y-10 mb-10">
        <label className="text-lg font-mono">Current Password</label>
        <input type="password" className="border-[2px] text-lg" name="oldPassword"  value={formValues.oldPassword}   onChange={handleChange}/>
        <label className="text-lg font-mono">New Password</label>
        <input type="password" className="border-[2px] text-lg"  name="newPassword" value={formValues.newPassword} onChange={handleChange}/>
      </div>
      <div className="flex justify-end gap-5 mt">
        <button
          className="text-lg border-[2px] px-3 py-1 font-mono"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button className="text-lg border-[2px] px-3 py-1 font-mono" onClick={onClickModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};
export default PasswordForm;
