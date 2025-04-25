import "./NavBar.css";

import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Portfolio</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About me</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
