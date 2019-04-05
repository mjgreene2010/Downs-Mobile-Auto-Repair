import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default class Nav extends Component {
  render() {
    const link = {
      width: "50px",
      color: "black",
      display: "inline-block"
    };
    return this.props.user === true ? (
      <div className="nav">
        <br style={{ lineHeight: "3rem" }} />
        <div
          style={{ width: "100%", borderTop: "2px", borderTopColor: "gray" }}
        >
          <hr />
          <NavLink
            to={`/users/${this.props.user_id}`}
            exact
            style={link}
            activeStyle={{
              background: "gray"
            }}
          >
            Home
          </NavLink>{" "}
          <NavLink
            to="/about"
            exact
            style={link}
            activeStyle={{
              background: "gray"
            }}
          >
            About
          </NavLink>{" "}
          <NavLink
            to="/orders"
            exact
            style={link}
            activeStyle={{
              background: "gray"
            }}
          >
            Orders
          </NavLink>{" "}
          <NavLink
            to="/admin"
            exact
            style={link}
            activeStyle={{
              background: "gray"
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
              background: "gray"
            }}
          >
            Home
          </NavLink>{" "}
          <NavLink
            to="/about"
            exact
            style={link}
            activeStyle={{
              background: "gray"
            }}
          >
            About
          </NavLink>{" "}
          <NavLink
            to="/orders"
            exact
            style={link}
            activeStyle={{
              background: "gray"
            }}
          >
            Orders
          </NavLink>{" "}
          <hr />
        </div>
      </div>
    );
  }
}
