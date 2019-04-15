import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default class Nav extends Component {
  render() {
    const link = {
      width: "50px",
      color: "black",
      display: "inline-block",
      textDecoration: "none",
      margin: "25px",
      // backgroundColor: "red	",
      border: "solid 3px",
      marginTop: "1px",
      borderRadius: "15px",
      padding: "5px"
    };
    return this.props.user === true ? (
      <div className="nav">
        <br style={{ lineHeight: "3rem" }} />
        <div
          style={{ width: "100%", borderTop: "2px", borderTopColor: "gray" }}
        >
          <NavLink
            to={`/users/${this.props.user_id}`}
            exact
            style={link}
            activeStyle={{
              background: "red"
            }}
          >
            Home
          </NavLink>{" "}
          <NavLink
            to="/about"
            exact
            style={link}
            activeStyle={{
              background: "red"
            }}
          >
            About
          </NavLink>{" "}
          <NavLink
            to="/orders"
            exact
            style={link}
            activeStyle={{
              background: "red"
            }}
          >
            Orders
          </NavLink>{" "}
          <NavLink
            to="/admin"
            exact
            style={link}
            activeStyle={{
              background: "red"
            }}
          >
            Admin
          </NavLink>
        </div>
      </div>
    ) : (
      // );
      <div className="nav">
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
        </div>
      </div>
    );
  }
}
