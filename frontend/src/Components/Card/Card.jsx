  import img from "../../assets/imgs/user-avatar.png";
  import Row from "../Row/Row";
  import Operation from "../Operation/Operation";


  const Card = ({imgData , index}) => {

    return (
      <Row className={""}>
        <div className="rounded-md shadow-lg card_1 overflow-ellipsis p-6 w-[100%] h-[100px] flex justify-around items-center">
          <span className="w-[30px] h-[30px] text-center rounded-full text-xl font-mono text-[#dff7e5] bg-[#92e3a9] font-bold">{index+1}</span>
          <div className="overflow-hidden rounded-sm   border-4 border-[#92e3a9] min-w-[80px] max-w-[100px] max-h-[90%] transition-all cursor-pointer"><img src={imgData.url || img} alt="" className={"transition-all hover:scale-125"}  /></div>
          <p className="overflow-ellipsis text-[18px]  text-[#92e3a9] font-bold font-mono uppercase cursor-default">
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
