import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { VscAccount } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
import { FiHelpCircle } from "react-icons/fi";
import GlassicsLogo from "../../assets/glassics-logo.png";

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <div className="logo">
          <img src={GlassicsLogo} alt="" />
          <p> GLASSICS</p>
        </div>
      </Link>

      <div className="search-ctn">
        <input type="text" placeholder="Search for glasses" />
        <Link to="/">
          <button className="search-btn">SEARCH</button>
        </Link>
      </div>

      <div className="nav-options">
        <Link to="/cart" className="nav-opt">
          <BsCart3 className="nav-icon" />
          <p className="nav-link">Cart</p>
        </Link>

        <Link to="/signup" className="nav-opt">
          <VscAccount className="nav-icon" />
          <p className="nav-link">Account</p>
        </Link>

        <Link to="/help" className="nav-opt">
          <FiHelpCircle className="nav-icon" />
          <p className="nav-link">Help</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
