import React from "react";
import Logo from "../images/logo.png";
import '../css/header.css';
import {FaSearch} from 'react-icons/fa';
const Header = () => {
  return (
    <React.Fragment>
      <div className="row p-3">
        <div className="col-lg-4">
          <img src={Logo} alt="logo" />
        </div>
        <div className="col-lg-5 text-center">
          <h3>Nepal IT Solution Pvt. Ltd</h3>
          <small>Solution to every IT problem</small>
          <div className="row mt-3">
              <div className="col-lg-9">
                   <input type="text" id="search-box" className="form-control" placeholder="Search your products..." />
              </div>
              <div className="col-lg-2 mt-2">
                   <button className="btn btn-small"><FaSearch size="15" /></button>
              </div>
          </div>
         
         
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
