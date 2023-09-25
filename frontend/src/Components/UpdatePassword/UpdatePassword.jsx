import Modal from "../Modal/Modal";
import PasswordForm from "../PasswordForm.jsx/PasswordForm";
const UpdatePassword=()=>{

    return(
        <>
        <Modal>
            <Modal.Open open={"update_password"}>
        <button className=" inline min-w-[150px] rounded-md bg-[#92e3a9] py-2 w-[50%] text-center cursor-pointer active:translate-y-1 transition-all">Update Password</button>

            </Modal.Open>

            <Modal.Window show={"update_password"}>
                <PasswordForm/>
            </Modal.Window>
        </Modal>
        </>
    )
}

export default UpdatePassword;      