
import Section3Left from "./section3Left";
import Section3Right from "./section3rightside";
import { useRef } from "react";
import Gsap from './gsap'
const Section3 =()=>{
const boxleft=useRef(null)
const boxright=useRef(null)

  
    return(
    < div style={{display:'flex',justifyContent:'space-around',alignItems:'center' }}>
    <Gsap props={{ Sopacity:0,Sx:-100, ex:300,index:2 }} box={boxleft} />
    <Section3Left  boxref={boxleft }  />
    <Gsap props={{ Sopacity:0,Sx:1000,ex:-100,index:1}} box={boxright} />
    <Section3Right boxref={boxright}/>
    </div>
    )
}
export default Section3;