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
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
