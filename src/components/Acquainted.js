import React from "react";
import manLaptop from "../img/man-laptop-v1.svg";
import MyContext from "../context/MyContext";

export default function Acquainted() {
  return (
    <MyContext.Consumer>
      {(context) => {
        return (
          <>
            <div className="acquainted-wrapper">
              <h1 className="heading1">Let's get acquainted</h1>
              <section className="acquainted-info-wrapper">
                <img src={manLaptop} alt="Programmer image" />
                <div className="acquainted-info">
                  <h2>I am cool frontend developer</h2>
                  <br />
                  <p>
                    We will evaluate how clean your approach to writing CSS and
                    Javascript code is. You can use any CSS and Javascript 3rd
                    party libraries without any restriction.
                  </p>
                  <br />
                  <p>
                    If 3rd party css/javascript libraries are added to the
                    project via bower/npm/yarn you will get bonus points. If you
                    use any task runner (gulp/webpack) you will get bonus points
                    as well. Slice service directory page PSD mockup into
                    HTML5/CSS3.
                  </p>
                  <br />
                  <button type="button" className="flat">
                    Sign up now
                  </button>
                </div>
              </section>
            </div>
            {document.addEventListener("DOMContentLoaded", context.cutAt)}
          </>
        );
      }}
    </MyContext.Consumer>
  );
}
