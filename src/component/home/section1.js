import { useRef, useEffect } from 'react';
import darkcomputer from './img/darkcomputer.jpg';
import { gsap, Power3, Power2 } from 'gsap';

const Section1 = () => {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const thirdText = useRef(null);
    const forthText = useRef(null)
    const image = useRef(null)
    useEffect(() => {
        const tl = gsap.timeline(); // Create a single timeline

        tl.fromTo(
            firstText.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: -12, duration: 1, ease: Power2.easeOut }
        )
            .fromTo(
                secondText.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 10, duration: 1, ease: Power2.easeOut },

            )
            .fromTo(
                thirdText.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 10, duration: 1, ease: Power3.easeOut },

            )
            .fromTo(
                forthText.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 10, duration: 1, ease: Power3.easeOut }
            ).fromTo(
            image.current,
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 5, ease: "back.inOut" }
        );
    }, []);


    return (
        <div className="container-fluid " style={{ boxSizing: 'border-box', margin: 0, padding: 0, }}>
            <div className='row' style={{height:'100vh'}} >
                <div className="left bg-dark col-lg-6 col-sm-12 col-md-12 "
                    style={{
                        height:'100%',
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
                        <span className="" ref={secondText}>Abdul</span>
                        <br />
                        <span className="" ref={thirdText} >Rehman</span>
                    </div>
                    <span className="text-white" ref={forthText}>
                        front developer
                    </span>
                </div>

                <div className="right col-lg-6 col-sm-12 col-md-12 p-0  h-100">
                    <img ref={image} className="img-fluid h-100" src={darkcomputer} alt="not img" />
                </div>
            </div>
        </div>
    );
};

export default Section1;
