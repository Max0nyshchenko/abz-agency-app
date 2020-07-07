import MyContext from "./MyContext";
import { Component } from "react";
import React from "react";

class MyProvider extends Component {
  constructor() {
    super();
    this.state = {
      mobMenuOpened: false,
    };
    this.burgerLogic = this.burgerLogic.bind(this);
    this.fileCSS = this.fileCSS.bind(this);
  }

  // dealing with containers overflow
  cutAt() {
    let showcaseP = document.querySelector(".showcase-info p");
    let acquaintedP = document.querySelectorAll(".acquainted-info p");

    acquaintedP.forEach((p) => {
      if (p.innerText.length > 400) {
        p.innerText = p.innerText.substring(0, 400) + "...";
      }
    });
    if (showcaseP.innerText.length > 400) {
      showcaseP.innerText = showcaseP.innerText.substring(0, 400) + "...";
    }
  }
  // button burger logic
  burgerLogic() {
    const menuMobile = document.querySelector(".menu-mobile");
    const darkBg = document.querySelector(".dark-bg");
    let mobMenuOpened = this.state.mobMenuOpened;
    if (mobMenuOpened === false) {
      darkBg.classList.add("show-bg");
      menuMobile.classList.add("show-menu-mobile");
      this.setState({
        mobMenuOpened: true,
      });
    } else {
      darkBg.classList.remove("show-bg");
      menuMobile.classList.remove("show-menu-mobile");
      this.setState({
        mobMenuOpened: false,
      });
    }
  }
  // Upload Photo CSS
  fileCSS() {
    const photoInput = document.querySelector("#photo");
    const fileCustom = document.querySelector(".file-custom");
    const file = document.querySelector(".file");
    let { photo, photoClicked } = this.state;

    document.addEventListener("click", (e) => {
      let click = e.target;
      if (click != fileCustom && click != file) {
        fileCustom.classList.remove("focus");
        fileCustom.classList.remove("valid");
      } else if (click == fileCustom) {
        fileCustom.classList.add("focus");
      }
    });
  }
  // Form logic
  formSubmit() {
    const form = document.querySelector(".form");
    form.classList.add("submitted");
  }

  render() {
    return (
      <MyContext.Provider
        value={{
          ...this.state,
          cutAt: this.cutAt,
          burgerLogic: this.burgerLogic,
          formSubmit: this.formSubmit,
          fileCSS: this.fileCSS,
          handleChangePhoto: this.handleChangePhoto,
          fileCSSclicked: this.fileCSSclicked,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
