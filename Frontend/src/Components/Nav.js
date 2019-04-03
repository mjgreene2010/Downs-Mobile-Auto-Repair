import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    const link = {
      width: "50px",
      color: "black",
      display: "inline-block"
    };
    return this.props.user === true ? (
      <div>
        <br style={{ lineHeight: "3rem" }} />
        <div style={{ width: "100%" }}>
          <NavLink
            to={`/users/${this.props.user_id}`}
            exact
            style={link}
            activeStyle={{
              background: "brown"
            }}
          >
            Home
          </NavLink>{" "}
          <NavLink
            to="/about"
            exact
            style={link}
            activeStyle={{
              background: "brown"
            }}
          >
            About
          </NavLink>{" "}
          <NavLink
            to="/orders"
            exact
            style={link}
            activeStyle={{
              background: "brown"
            }}
          >
            Orders
          </NavLink>{" "}
          <NavLink
            to="/admin"
            exact
            style={link}
            activeStyle={{
              background: "brown"
            }}
          >
            Admin
          </NavLink>
        </div>
      </div>
    ) : (
      // );
      <div>
        <br style={{ lineHeight: "3rem" }} />
        <div style={{ width: "100%" }}>
          <NavLink
            to={`/users/${this.props.user_id}`}
            exact
            style={link}
            activeStyle={{
              background: "brown"
            }}
          >
            Home
          </NavLink>{" "}
          <NavLink
            to="/about"
            exact
            style={link}
            activeStyle={{
              background: "brown"
            }}
          >
            About
          </NavLink>{" "}
          <NavLink
            to="/orders"
            exact
            style={link}
            activeStyle={{
              background: "brown"
            }}
          >
            Orders
          </NavLink>{" "}
        </div>
      </div>
    );
  }
}
