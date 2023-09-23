import img from "../../assets/imgs/user-avatar.png";
import Row from "../Row/Row";
import Operation from "../Operation/Operation";


const Card = ({imgData}) => {
  console.log(imgData)

  return (
    <Row className={""}>
      <div className="rounded-md shadow-lg card_1 overflow-ellipsis p-6 min-w-[250px] h-[350px] flex flex-col items-center gap-3">
        <img src={imgData.url || img} alt="" className={"w-[209px]"} />
        <p className="overflow-ellipsis">
          {imgData.title}
        </p>
        <div className="flex">
        <Operation id={imgData._id}/>
        </div>
      </div>
      
    </Row>
  );
};

export default Card;
