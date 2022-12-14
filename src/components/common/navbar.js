import React from "react";

const NavBar=()=>{
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
        <a className="nav-link" href="/shop">Shop</a>
        <a className="nav-link" href="/about">About Us</a>
        <a className="nav-link" href="/contact">Contact Us</a>
      </div>
    </div>
  </div>
</nav>
        </React.Fragment>
    );
}

export default NavBar;