import React, { useEffect } from "react";
import MyContext from "../context/MyContext";

export default function Form() {
  const photoTXT = () => {
    let txt = document.getElementById("photo").value;
    document.querySelector(".file-custom").innerHTML = txt;
  };

  return (
    <MyContext.Consumer>
      {(context) => {
        return (
          <div>
            <div className="form-wrapper">
              <h1 className="heading1">Register to get a work</h1>
              <form action="POST" className="form">
                <div className="input-field">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    id="name"
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    id="email"
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="phone">Phone number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+380 XX XXX XX XX"
                    id="phone"
                    required
                  />
                  <p>Enter phone number in open format</p>
                </div>
                <div className="input-field">
                  <label htmlFor="position">Select your position</label>
                  <div className="radio">
                    <input
                      type="radio"
                      name="position"
                      id="frontend_developer"
                      value="frontend_developer"
                    />
                    <label htmlFor="frontend_developer">
                      Frontend developer
                    </label>
                  </div>
                  <div className="radio">
                    <input
                      type="radio"
                      name="position"
                      id="backend_developer"
                      value="backend_developer"
                    />
                    <label htmlFor="backend_developer">Backend developer</label>
                  </div>
                  <div className="radio">
                    <input
                      type="radio"
                      name="position"
                      id="designer"
                      value="designer"
                    />
                    <label htmlFor="designer">Designer</label>
                  </div>
                  <div className="radio">
                    <input type="radio" name="position" id="QA" value="QA" />
                    <label htmlFor="QA">QA</label>
                  </div>
                </div>
                <div className="input-field">
                  <label htmlFor="photo">Photo</label>
                  <label
                    onClick={() => {
                      let { fileCSS } = context;
                      const fileCustom = document.querySelector(".file-custom");
                      const photoInput = document.querySelector("#photo");
                      photoInput.click();
                      fileCustom.classList.add("focus");
                      fileCSS();
                    }}
                    onChange={() => {
                      const fileCustom = document.querySelector(".file-custom");
                      fileCustom.classList.remove("focus");
                      fileCustom.classList.remove("invalid");
                      fileCustom.classList.add("valid");
                      fileCustom.classList.add("uploaded");
                      if (fileCustom.innerText == "") {
                        fileCustom.classList.add("invalid");
                        fileCustom.classList.remove("valid");
                        fileCustom.innerText = "No file chosen";
                      }
                    }}
                    className="file"
                    htmlFor="file"
                  >
                    <input
                      onChange={photoTXT}
                      type="file"
                      name="photo"
                      id="photo"
                    />
                    <span className="file-custom">Upload your photo</span>
                  </label>
                </div>
                <input
                  onClick={context.formSubmit}
                  className="primary"
                  type="submit"
                  value="Sign up now"
                />
              </form>
            </div>
          </div>
        );
      }}
    </MyContext.Consumer>
  );
}
