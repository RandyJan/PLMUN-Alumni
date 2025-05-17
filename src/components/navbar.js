import React from "react";
import "./landingpage.scss";
import Logo from "../assets/logo.png"; // Adjust the path as necessary
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <div>
          <p className="headername">PLMUN ALUMNI</p>
          <p className="footername">PAMANTASAN NG LUNGSOD NG MUNTINLUPA</p>
        </div>
      </div>
      <div className="nav-links">
        <p>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </p>
        <p>
          <Link to="/aboutus">About us</Link>
        </p>
        <p>
          <Link to="/directory">Alumni Directory</Link>
        </p>
        <p>
          <Link to="/contactus">Contact us</Link>
        </p>
        <a
          href="https://alumni-portal-rosy.vercel.app"
          className="login-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login
        </a>
      </div>
    </div>
  );
}
export default Navbar;
