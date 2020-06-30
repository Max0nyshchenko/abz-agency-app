import React from "react";
import logo from "../img/logo.svg";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <img className="logo-img" src={logo} alt="logo" />
      </div>
      <ul className="menu">
        <li>
          <a className="link" href="/">
            About me
          </a>
        </li>
        <li>
          <a className="link" href="/">
            Relationships
          </a>
        </li>
        <li>
          <a className="link" href="/">
            Requirements
          </a>
        </li>
        <li>
          <a className="link" href="/">
            Users
          </a>
        </li>
        <li>
          <a className="link" href="/">
            Sign up
          </a>
        </li>
      </ul>
    </header>
  );
}
