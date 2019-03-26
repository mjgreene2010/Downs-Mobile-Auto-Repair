import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    const link = {
      width: "50px",
      color: "black",
      display: "inline-block"
    };
    return (
      <div>
        <div style={{ width: "100%" }}>
          <NavLink
            to="/"
            exact
            // style={{ background: "blue", width: "100%" }}
            // style={link}
            //   activeStyle={{
            //     background: "brown"
            //   }}
          >
            Home
          </NavLink>
        </div>
      </div>
    );
  }
}
