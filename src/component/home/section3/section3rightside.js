import image from '../img/computer bg.webp'
const Section3Right=({boxref})=>{
    return(
            <div ref={boxref} className="w-50" style={{height:500}}>
            <img src={image}></img>
        </div>
    )
}
export default Section3Right;