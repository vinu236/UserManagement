const { useLocalStorageState } = require("./DEMO1.JS")

const Demo=()=>{
const[value,setValue]=useLocalStorageState(null,user);
    const handleClick=()=>{

        setValue("hey")

    }

    return(
        <>
        <button onClick={handleClick}>Login</button>
        <p>{value}</p>
        </>
    )
}

export default Demo;