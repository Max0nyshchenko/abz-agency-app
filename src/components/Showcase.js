import React from "react";
import backImg from "../img/banner-photo.jpg";
import MyContext from "../context/MyContext";

export default function Showcase() {
  return (
    <MyContext.Consumer>
      {(context) => {
        return (
          <>
            <div
              style={{ backgroundImage: "url(" + backImg + ")" }}
              className="showcase"
            >
              <div className="showcase-info">
                <div className="title">
                  test assignment for frontend developer position
                </div>
                <p>
                  We kindly remind you that your test assignment should be
                  submitted as a link to github/bitbucket repository. Please be
                  patient, we consider and respond to every application that
                  meets minimum requirements. We look forward to your
                  submission. Good luck! The photo has to scale in the banner
                  area on the different screens
                </p>
                <button type="button" className="primary">
                  Sign up now
                </button>
              </div>
            </div>
          </>
        );
      }}
    </MyContext.Consumer>
  );
}
