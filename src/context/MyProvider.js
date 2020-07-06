import MyContext from "./MyContext";
import { Component } from "react";
import React from "react";

class MyProvider extends Component {
  state = {
    mobMenuOpened: false,
  };
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
    let { mobMenuOpened } = this.state;
    console.log(this.state);
    if (mobMenuOpened === false) {
      darkBg.classList.add("show-bg");
      menuMobile.classList.add("show-menu-mobile");
      this.setState({
        mobMenuOpened: true,
      });
    } else {
      darkBg.classList.remove("show-bg");
      menuMobile.classList.remove("show-menu-mobile");
    }
  }

  render() {
    return (
      <MyContext.Provider
        value={{
          ...this.state,
          cutAt: this.cutAt,
          burgerLogic: this.burgerLogic,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
