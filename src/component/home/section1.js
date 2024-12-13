import { useRef, useEffect } from 'react';
import darkcomputer from './img/darkcomputer.jpg';
import { gsap, Power3,Power2 } from 'gsap';

const Section1 = () => {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const thirdText = useRef(null);
    const forthText=useRef(null)
    const image=useRef(null)
    useEffect(() => {
        const tl = gsap.timeline(); // Create a single timeline

        tl.fromTo(
            firstText.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: -12, duration: 1, ease: Power3.easeOut }
        )
            .fromTo(
                secondText.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: -12, duration: 1, ease: Power3.easeOut },
                "-=0.5" // Start 0.5 seconds earlier for overlap
            )
            .fromTo(
                forthText.current,{
                    opacity:0,y:20},
                {opacity:1,y:-12,duration:1,ease:Power3.easeOut},
                "-=0.5"
            )
            .fromTo(
                thirdText.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: -12, duration: 1, ease: Power3.easeOut },
                "-=0.5"
            );
            gsap.fromTo(image.current,{
            duration:2,
            scale:0.3,
            opacity:0,
            
        },
        {
            opacity:1,
            duration:2,
            scale:1,
            ease:'back.inOut'
        }
    )
    }, []);

    return (
        <div className="container-fluid d-flex width-50" style={{ flexDirection: 'row' , boxSizing:'border-box',
            margin:0,
            padding:0}}>
            <div
                className="left bg-dark col-6"
                style={{
                    
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                     
                }}
            >
                <div className="h6 text-warning" ref={firstText}>
                    <span className="">hi i am!</span>
                </div>
                <div className="h1 text-white" >
                    <span className=""ref={secondText}>Abdul</span>
                    <br />
                    <span ref={forthText}>Rehman</span>
                </div>
                <span className="text-white" ref={thirdText}>
                    front developer
                </span>
            </div>

            <div className="right col-6">
                <img ref={image} className="img-fluid" src={darkcomputer} alt="not img" />
            </div>
        </div>
    );
};

export default Section1;
