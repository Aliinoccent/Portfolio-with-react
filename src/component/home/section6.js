import image from './img/circle.webp'
const Section6 = () => {
    return (
        <div className="row bg-dark text-white  p-5" style={{ minHeight: '40vh' }}>
            <div className="left col-lg-6  col-sm-12 d-flex  flex-lg-row flex-column align-items-center justify-content-sm-start  mb-4 mb-lg-0">
                <img src={image} className='img-fluid rounded-circle me-lg-3 mb-3 mb-lg-0"'></img>
                <div className=''>happy Coding</div>

            </div>
            <div className="right col-lg-6 col-sm-12 d-flex justify-content-center flex-column gap-4 text-white">
                
                <div className='d-flex gap-4 align-items-center align-items-sm-start'>
                    <i class="fa-solid fa-location-dot text-white"></i>
                    <div className=' text-center  text-lg-start '>LAHORE CANTT ARIFABAD LAHORE</div>
                </div>
                
                <div className='d-flex gap-4 align-items-center '>
                    <i class="fa-solid fa-phone text-white "></i>
                    <div className=''>03094028763</div>
                </div>
               
                <div className='d-flex align-items-center gap-4'>
                    <i class="fa-regular fa-envelope " style={{ color: 'white' }}></i>
                    <div className=''>abdulrehman.cs.123.@gmail.com</div>
                </div>
            
            </div>
        </div>
    )
}
export default Section6


// import image from './img/circle.webp';

// const Section6 = () => {
//     return (
//         // Main container for the section with Bootstrap's row class for layout
//         <div className="row bg-dark text-white p-5" style={{ minHeight: '40vh' }}>
//             {/* Left section */}
//             <div 
//                 className="bg-warning left col-lg-6 col-sm-12 d-flex flex-lg-row flex-column 
//                 align-items-center justify-content-sm-start mb-4 mb-lg-0">
//                 {/* Added col-lg-6 for large screens and col-sm-12 for stacking on smaller screens */}
                
//                 {/* Image */}
//                 <img 
//                     src={image} 
//                     className="img-fluid rounded-circle me-lg-3 mb-3 mb-lg-0" 
//                     alt="Circle" 
//                 />
//                 {/* Added img-fluid to make the image responsive */}
//                 {/* Added rounded-circle for circular shape */}
//                 {/* Added me-lg-3 for spacing on large screens and mb-3 for margin on smaller screens */}

//                 {/* Text */}
//                 <div>Happy Coding</div>
//             </div>

//             {/* Right section */}
//             <div 
//                 className="bg-primary right col-lg-6 col-sm-12 d-flex justify-content-center flex-column gap-4 text-white">
//                 {/* Added col-lg-6 for large screens and col-sm-12 for stacking */}
//                 {/* Added d-flex, justify-content-center, and flex-column for proper alignment */}
//                 {/* Added gap-4 for spacing between rows */}

//                 {/* Location row */}
//                 <div className="d-flex gap-4 align-items-center align-items-sm-start">
//                     <i className="fa-solid fa-location-dot text-white"></i>
//                     <div className="text-center text-lg-start">LAHORE CANTT ARIFABAD LAHORE</div>
//                 </div>
//                 {/* Added d-flex for flexible row layout */}
//                 {/* Added gap-4 for spacing between icon and text */}
//                 {/* Added align-items-center for vertical alignment */}
//                 {/* Added text-center for smaller screens and text-lg-start for large screens */}

//                 {/* Phone row */}
//                 <div className="d-flex gap-4 align-items-center">
//                     <i className="fa-solid fa-phone text-white"></i>
//                     <div>03094028763</div>
//                 </div>
//                 {/* Similar flexbox layout and spacing as Location row */}

//                 {/* Email row */}
//                 <div className="d-flex align-items-center gap-4">
//                     <i className="fa-regular fa-envelope" style={{ color: 'white' }}></i>
//                     <div>abdulrehman.cs.123.@gmail.com</div>
//                 </div>
//                 {/* Added email icon and text with consistent alignment */}
//             </div>
//         </div>
//     );
// };

// export default Section6;


