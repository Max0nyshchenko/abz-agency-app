import MyContext from "./MyContext";
import { Component } from "react";
import React from "react";

class MyProvider extends Component {
  constructor() {
    super();
    this.state = {
      mobMenuOpened: false,
      positionsLoaded: false,
      positions: {},
      users: {},
      usersLoaded: false,
      next_url:
        "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6",
    };
    this.burgerLogic = this.burgerLogic.bind(this);
    this.fileCSS = this.fileCSS.bind(this);
    this.showMore = this.showMore.bind(this);
    this.getData = this.getData.bind(this);
    this.getData2 = this.getData2.bind(this);
    this.getPositions = this.getPositions.bind(this);
  }

  getData = () => {
    // get users

    //
    fetch(this.state.next_url)
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        this.setState({
          users: data,
          usersLoaded: true,
        });
      })
      .catch((error) => console.log(error));
  };
  getData2(url) {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        this.setState({
          users: data,
          usersLoaded: true,
        });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.getData();
    this.getPositions();
  }
  // show more users.js handler
  showMore(url) {
    this.setState({
      next_url: url,
    });
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
  handleSubmit() {
    //     var formData = new FormData();
    //     var fileField = document.querySelector('input[type="file"]');
    //       formData.append('position_id', 2);
    //       formData.append('name', 'Jhon');
    //       formData.append('email', 'Jhon@gmail.com');
    //       formData.append('phone', '+380955388485');
    //       formData.append('photo', fileField.files[0]);
    // fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users',
    //         { method: 'POST', body: formData, headers:
    //             { 'Token': token, get token with GET api/v1/token method },
    //            })
    //           .then(function(response) { return response.json(); })
    //           .then(function(data) { console.log(data); if(data.success) {  process success response } else {  proccess server errors } }) .catch(function(error) {  proccess network errors });
  }
  // get radio buttons position from api
  getPositions() {
    fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        this.setState({
          positionsLoaded: true,
          positions: data.positions,
        });
      });
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
          showMore: this.showMore,
          getData2: this.getData2,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
