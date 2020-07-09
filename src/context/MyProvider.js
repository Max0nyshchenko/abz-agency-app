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
    this.getData = this.getData.bind(this);
    this.getData2 = this.getData2.bind(this);
    this.getPositions = this.getPositions.bind(this);
  }

  getData = () => {
    // get users
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
  handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');
    formData.append(
      "position_id",
      document.querySelector('input[name="position"]:checked').value
    );
    formData.append("name", document.querySelector("input#name").value);
    formData.append("email", document.querySelector("input#email").value);
    formData.append("phone", document.querySelector("input#phone").value);
    formData.append("photo", fileField.files[0]);

    // get token
    let token;
    await fetch("https://frontend-test-assignment-api.abz.agency/api/v1/token")
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        token = data.token;
      })
      .catch((error) => {
        console.log(error.message);
      });

    // POST data

    await fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users",
      {
        method: "POST",
        body: formData,
        headers: { Token: token },
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        if (!data.success) {
          alert(data.message);
        } else {
          alert("Success");
        }
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };
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
          getData2: this.getData2,
          handleSubmit: this.handleSubmit,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
