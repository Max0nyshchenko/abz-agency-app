import React from "react";

export default function Form() {
  const photoTXT = () => {
    let txt = document.getElementById("photo").value;
    console.log(txt);
    document.querySelector(".file-custom").innerHTML = txt;
  };

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
              <label htmlFor="frontend_developer">Frontend developer</label>
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
            {/* <label htmlFor="photo">Photo</label>
            <input
              type="file"
              name="photo"
              placeholder="Upload your photo"
              id="photo"
              required
            /> */}
            <label htmlFor="photo">Photo</label>
            <label className="file" htmlFor="file">
              <input onChange={photoTXT} type="file" name="photo" id="photo" />
              <span className="file-custom">Upload your photo</span>
            </label>
          </div>
          <input className="primary" type="submit" value="Sign up now" />
        </form>
      </div>
    </div>
  );
}