import Section2Left from "./section2Left";
import Section2Right from "./section2rightside";
import { useRef } from "react";
import Gsap from "./gsap";

const Section2 = () => {
  const boxleft = useRef(null);
  const boxright = useRef(null);

  return (
    <div
      className="bg-warning" 
      style={{ position: 'relative', marginTop: 30 }}
    >
      {/* Section 2 Left */}
      <div 
        className="position-absolute d-lg-block d-sm-static" 
        style={{
          zIndex: 2,
          top: '20%',
          left: '20%'
        }}
      >
        <Gsap props={{ Sopacity: 0, Sx: -100, ex: 0 }} box={boxleft} />
        <Section2Left boxref={boxleft} />
      </div>

      {/* Section 2 Right */}
      <div>
        <Gsap props={{ Sopacity: 0, Sx: 500, ex: 0 }} box={boxright} />
        <Section2Right className="" boxref={boxright} />
      </div>
    </div>
  );
};

export default Section2;
