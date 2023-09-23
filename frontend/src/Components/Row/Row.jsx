const Row = ({
 children,
 className     
}) => {
  
    return <div className={`flex gap-40 ${className}`}>{children}</div>;

};

export default Row;
