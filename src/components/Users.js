import React from "react";
import userImg from "../img/photo-cover.svg";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";
import MyContext from "../context/MyContext";

export default function Users() {
  function marginName() {
    let h2 = document.querySelectorAll(".user-name");
    h2.forEach((item) => {
      let txt = item.innerHTML.split("");
      if (txt.length > 15) {
        item.style.marginBottom = 17 + "px";
      }
    });
  }

  document.addEventListener("DOMContentLoaded", marginName);

  return (
    <MyContext.Consumer>
      {(context) => {
        console.log(context);
        return (
          <section className="users-wrapper">
            <h1 className="heading1">Our cheerful users</h1>
            <div className="users">
              {/* <div className="user">
                <img className="user-img" src={userImg} alt="user image" />
                <h2 className="user-name">Maximmillian Ollian Collianno</h2>
                <div className="user-info">
                  <p className="user-position">
                    Leading specialist of the Control Department
                  </p>
                  <Tooltip
                    followCursor="true"
                    title="Welcome to React"
                    position="bottom"
                    trigger="mouseenter"
                  >
                    <p className="user-email">controldepartment@gmail.com</p>
                  </Tooltip>
                  <p className="user-phone">+380 50 687 03 24</p>
                </div>
              </div> */}
              {context.usersLoaded
                ? context.users.users.map((user) => {
                    return (
                      <div key={user.id} className="user">
                        <img
                          className="user-img"
                          src={user.photo}
                          alt="user image"
                        />
                        <h2 className="user-name">{user.name}</h2>
                        <div className="user-info">
                          <p className="user-position">{user.position}</p>
                          <Tooltip
                            followCursor="true"
                            title="Welcome to React"
                            position="bottom"
                            trigger="mouseenter"
                          >
                            <p className="user-email"> {user.email} </p>
                          </Tooltip>
                          <p className="user-phone"> {user.phone} </p>
                        </div>
                      </div>
                    );
                  })
                : "Loading..."}
            </div>
            <button
              onClick={
                // context.usersLoaded
                //   ? context.showMore(context.users.page)
                //   : null
                () => {
                  context.showMore(context.users.links.next_url);
                  context.getData2(context.users.links.next_url);
                }
              }
              style={{ margin: "0 auto", display: "block" }}
              className="primary"
            >
              Show more
            </button>
          </section>
        );
      }}
    </MyContext.Consumer>
  );
}
