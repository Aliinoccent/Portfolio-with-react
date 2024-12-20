const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light m-0 p-0">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
           
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
     <button class="btn btn-outline-success" type="submit">Search</button>
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
