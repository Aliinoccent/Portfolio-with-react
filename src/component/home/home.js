import Navbar from "./navBar"
import Section1 from "./section1"
import Section3 from "./section3"
import Section4 from "./section4"
import Section2 from "./section2/section2"
import Card from "./cards/card"
import Image from './img/back.jpg'
import Image2 from './img/computer bg.webp'
import Image3 from './img/darkcomputer.jpg'
import Section5 from "./section5"
import Section6 from "./section6"
import Section7 from "./section7"

const Home = () => {
    const cardObject = [{
        image: Image,
        cardTitle: 'Basic Plan',
        discount: 'Starting at $150/mo',
        data: 'Responsive web design involves using flexible grids, layouts, and images, as well as CSS media queries to adjust the design and content based on the characteristics of the device and screen size. This approach eliminates the need for separate mobile and desktop versions of a website'
    },
    {
        image: Image2,
        cardTitle: ' Creative Plan',
        discount: 'Starting at $200/mo',
        data: 'Id be happy to help you with any questions or issues related to Google Tasks (GTasks). Could you please provide me with more details about what specific problem you re facing or what you need help with regarding GTasks? The more information you provide, the better Ill be able to assist you'
    },

    {
        image: Image3,
        cardTitle: ' Premium Plan',
        discount: 'Starting at $250/mo',
        data: 'Improving website performance using AI (Artificial Intelligence) involves leveraging AI technologies and techniques to enhance various aspects of your websites speed, user experience, and overall efficiency. Here are some ways AI can be utilized to optimize website performance:'
    }

    ]
    return (
        
        <div className="container-fluid">
        <div className="col-12">
          <Navbar />
        </div>
        <div className="col-12">
          <Section1 />
        </div>
        <div className="col-12">
          <Section2 />
        </div> 
        <div className="col-12">
             <Section3/>
        </div>
        <div className="col-12">
         <Card props={cardObject} />
        </div>

        <div className="col-12">
         <Section4 />
        </div>

        <div className="col-12">
         <Section5 />
        </div>

        <div className="col-12">
         <Section6 />
        </div>
      </div>
      
           
            
       
    )
}
export default Home 