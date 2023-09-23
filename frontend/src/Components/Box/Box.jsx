import "./Box.css"
const Box=({children,})=>{

    return(
        <section className="h-screen overflow-hidden flex justify-center items-center" >
            {children}
        </section>
    )
}


export default Box;