import back from "./img/back.jpg";

const Section3 = () => {
  return (
    <div
      className="container-fluid"
      style={{ position: "relative", zIndex: 1 }}
    >
      <img
        className="w-100"
        style={{
          backgroundSize: "cover",
          height: "100vh",
          position: "absolute",
          right: 0,
        }}
        src={back}
        alt="not img"
      ></img>
      <div
        className="h1 text-primary"
        style={{
          color: "white",
          position: "absolute",
          zIndex: 2,
          left: "40%",
          top: "200px",

          
          padding: "20px", // Optional: Add some padding for aesthetics
          borderRadius: "8px", // Optional: Add rounded corners
        }}
      >
        HAPPY CODING
      </div>
      <div>UI/UX</div>
    </div>
  );
};

export default Section3;
