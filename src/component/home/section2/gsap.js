import { useEffect } from "react"
import { Power3 } from "gsap";
import gsap from "gsap";
const Gsap=({props,box})=>{

    useEffect(()=>{
        gsap.fromTo(box.current,
            {
                opacity:props.Sopacity,
                x:props.Sx
            },
            {opacity:1,x:props.ex,duration:2,  ease: Power3.easeOut
            }
        )
    },[])
}
export default Gsap