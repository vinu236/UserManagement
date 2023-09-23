import { BiLoaderAlt } from "react-icons/bi";

const SpinnerMini = () => {
  return (
    <BiLoaderAlt
      className="w-6 h-6 animate-spin text=[#222]"
      style={{ animationDuration: "1.5s", animationIterationCount: "infinite", animationTimingFunction: "linear" }}
    />
  );
};

export default SpinnerMini;