const PasswordForm = ({onClickModal}) => {
  return (
    <div>
      <h1 className="text-xl font-mono font-semibold mb-9">Update Password</h1>
      <div className="grid grid-cols-2 gap-x-0 gap-y-10 mb-10">
        <label className="text-lg font-mono">Current Password</label>
        <input type="text" className="border-[2px] text-lg" />
        <label className="text-lg font-mono">Confirm Password</label>
        <input type="text" className="border-[2px] text-lg" />
      </div>
      <div className="flex justify-end gap-5 mt">
        <button
          className="text-lg border-[2px] px-3 py-1 font-mono"
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
