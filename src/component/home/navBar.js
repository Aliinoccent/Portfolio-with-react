import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light m-0 p-0">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  

    // <nav className="bg-dark d-flex align-items-center justify-content-around p-3">
    //   <a className="navbar-brand text-white"style={{flex:1}} href="#">
    //     Hi Coding!
    //   </a>
    //   <div  id="navbarSupportedContent" style={{flex:1}}>
    //     <ul className="navbar-nav mr-auto d-flex flex-row gap-5 "style={{gap:'2rem'}}>
    //       <li className="nav-item active">
    //         <a className="nav-link text-white" href="#">
    //           Home
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link text-white" style={{ color: 'black' }} href="#">
    //           About
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link text-white" href="#">
    //           Resume
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link text-white" href="#">
    //           Contact
    //         </a>
    //       </li>
    //       <li>
    //       <a className="nav-link text-white">03094028763</a>
    //       </li>
    //     </ul>
    //   </div>
      
        
      
    // </nav>
  );
};

export default Navbar;
