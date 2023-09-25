import Modal from "../Modal/Modal";
import PasswordForm from "../PasswordForm.jsx/PasswordForm";
const UpdatePassword=()=>{

    return(
        <>
        <Modal>
            <Modal.Open open={"update_password"}>
        <button className="text-left inline min-w-[150px]">Update Passoword</button>

            </Modal.Open>

            <Modal.Window show={"update_password"}>
                <PasswordForm/>
            </Modal.Window>
        </Modal>
        </>
    )
}

export default UpdatePassword;      