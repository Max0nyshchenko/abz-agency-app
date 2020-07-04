import React from "react";
import logo from "../img/logo.svg";
import burgerLogo from "../img/menu icon.svg";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <img className="logo-img" src={logo} alt="logo" />
      </div>
      {window.innerWidth > 768 ? (
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
      ) : (
        <button className="burger" type="button">
          <img src={burgerLogo} alt="burger icon" />
        </button>
      )}
    </header>
  );
}
