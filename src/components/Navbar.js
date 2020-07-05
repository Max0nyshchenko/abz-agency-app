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
      <div className="menu-mobile-wrapper">
        <div className="dark-bg"></div>
        <div className="menu-mobile">
          <img src={logo} alt="logo" />
          <hr />
          <ul className="menu-mobile-section">
            <li>
              <a target="_blank">About me</a>
            </li>
            <li>
              <a target="_blank">Relationships</a>
            </li>
            <li>
              <a target="_blank">Users</a>
            </li>
            <li>
              <a target="_blank">Sign up</a>
            </li>
            <li>
              <a target="_blank">Terms and Conditions</a>
            </li>
          </ul>
          <hr />
          <ul className="menu-mobile-section">
            <li>
              <a target="_blank">How it works</a>
            </li>
            <li>
              <a target="_blank">Partnership</a>
            </li>
            <li>
              <a target="_blank">Help</a>
            </li>
            <li>
              <a target="_blank">Leave testimonial</a>
            </li>
            <li>
              <a target="_blank">Contact us</a>
            </li>
          </ul>
          <hr />
          <ul className="menu-mobile-section">
            <li>
              <a target="_blank">Articles</a>
            </li>
            <li>
              <a target="_blank">Our news</a>
            </li>
            <li>
              <a target="_blank">Testimonials</a>
            </li>
            <li>
              <a target="_blank">Licenses</a>
            </li>
            <li>
              <a target="_blank">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
