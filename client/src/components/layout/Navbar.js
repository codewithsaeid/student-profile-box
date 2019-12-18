import React from "react";

import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Student" style={{ width: "150px" }} />
          </Link>

          <div className="collapse navbar-collapse">
            <div className="navbar-nav">
              <Link className="nav-item nav-link " to="/students">
                Students
              </Link>
            </div>
          </div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="login">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
