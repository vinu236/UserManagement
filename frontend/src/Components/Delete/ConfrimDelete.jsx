import SpinnerMini from "../SpinnerMini/SpinnerMini"
const ConfirmDelete=({resourceName,onClickModal,onClick,Loading})=>{



    return(
        <div className="w-[40rem] flex flex-col gap-4">
        <h1 className="text-xl font-medium">Delete {resourceName}</h1>
        <p>Are you sure you want to delete this {resourceName} permanently? This action cannot be undone. </p>
        <div className="flex justify-end gap-6">
            <button className="px-4 py-2 border-[1px] text-[#4b5563] bg-[#fff] shadow-[ 0 1px 2px rgba(0, 0, 0, 0.04)]" onClick={onClickModal} disabled={Loading}>Cancel</button>
            <button className="px-4 py-2 border-[1px] text-[#fee2e2;] bg-[#b91c1c] shadow-[ 0 1px 2px rgba(0, 0, 0, 0.04)]" onClick={onClick} disabled={Loading}>{Loading ? <SpinnerMini/> : "Delete"}</button>
        </div>
        </div>
    )
}

export default ConfirmDelete