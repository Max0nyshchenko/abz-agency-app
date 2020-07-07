import React from "react";
import logo from "../img/logo.svg";
import burgerLogo from "../img/menu icon.svg";
import { useContext } from "react";
import MyContext from "../context/MyContext";

export default function Navbar(props) {
  return (
    <MyContext.Consumer>
      {(context) => (
        <>
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
              <button
                onClick={context.burgerLogic}
                className="burger"
                type="button"
              >
                <img src={burgerLogo} alt="burger icon" />
              </button>
            )}
          </header>
          <div className="menu-mobile-wrapper">
            <div onClick={context.burgerLogic} className="dark-bg"></div>
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
        </>
      )}
    </MyContext.Consumer>
  );
}

// Navbar.contextType = Context;
