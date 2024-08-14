const Navbar = () => {
  return (
    <nav className="bg-dark d-flex align-items-center justify-content-around p-3" style={{ width: '100%' }}>
      <a className="navbar-brand text-white"style={{flex:1}} href="#">
        Hi Coding!
      </a>
      <div  id="navbarSupportedContent" style={{flex:1}}>
        <ul className="navbar-nav mr-auto d-flex flex-row gap-5 "style={{gap:'2rem'}}>
          <li className="nav-item active">
            <a className="nav-link text-white" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" style={{ color: 'black' }} href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Contact
            </a>
          </li>
          <li>
          <a className="nav-link text-white">03094028763</a>
          </li>
        </ul>
      </div>
      
        
      
    </nav>
  );
};

export default Navbar;
