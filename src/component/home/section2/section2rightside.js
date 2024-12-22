import image from '../img/computer bg.webp';

const Section2Right = ({ boxref }) => {
  return (
    <div className="col-12 d-flex justify-content-center">
      <img
        src={image}
        ref={boxref}
        style={{ maxWidth:'100%' ,height:'auto',display:'block',  }}
        alt="Background"
      />
    </div>
  );
};

export default Section2Right;
