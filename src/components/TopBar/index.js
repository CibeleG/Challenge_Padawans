import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import "./index.css";

function TopBar() {
  return (
    <div className="Nav">
      <Navbar expand="lg">
        <Navbar.Brand href="/" className="logo">
          <img src={logo} className={"img"} alt="logo" />
        </Navbar.Brand>    
      </Navbar>
    </div>
  );
}

export default TopBar;