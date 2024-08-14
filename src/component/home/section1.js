import darkcomputer from './img/darkcomputer.jpg';
const Section1 = () => {
    return (
        <div className="container-fluid d-flex width-50" style={{ flexDirection: 'row'}}>
            <div className="left bg-dark  col-6  " style={{ flex: 1, display:'flex',alignItems:'center' ,flexDirection:'column',justifyContent:'center' ,  }}>
                <div className='h6 text-warning '>
                    <span className=''>hi</span>
                    <span>i am!</span>
                </div>
                <div className='h1 text-white'>
                    <span className=''>Abdul</span>
                    <br></br>
                    <span>Rehman</span>
                </div>
                <span className='text-white'>front developer</span>
            </div>

            <div className='right bg-primary col-6' style={{ flex: 1 }}>
                <img className='img-fluid' src={darkcomputer} alt="not img" />
            </div>
        </div>
    );
};
export default Section1;
