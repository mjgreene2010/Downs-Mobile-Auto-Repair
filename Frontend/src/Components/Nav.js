import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default class Nav extends Component {
  render() {
    const link = {
      width: "medium",
      color: "black",
      display: "inline-block",
      textDecoration: "none",
      margin: "25px",
      // backgroundColor: "orange	",
      border: "solid 3px",
      marginTop: "1px",
      borderRadius: "15px",
      padding: "5px"
    };
    return this.props.user === true ? (
      <div className="nav">
        <br style={{ lineHeight: "3rem" }} />
        <div
          style={{ width: "100%", borderTop: "2px", borderTopColor: "orange" }}
        >
          <NavLink
            to={`/users/${this.props.user_id}`}
            exact
            style={link}
            activeStyle={{
              background: "orange"
            }}
          >
            Home
          </NavLink>{" "}
          <NavLink
            to="/about"
            exact
            style={link}
            activeStyle={{
              background: "orange"
            }}
          >
            About
          </NavLink>{" "}
          <NavLink
            to="/orders"
            exact
            style={link}
            activeStyle={{
              background: "orange"
            }}
          >
            Orders
          </NavLink>{" "}
          <NavLink
            to="/admin"
            exact
            style={link}
            activeStyle={{
              background: "orange"
            }}
          >
            Admin
          </NavLink>
          <NavLink
            to="/userprofile"
            exact
            style={link}
            activeStyle={{
              background: "orange"
            }}
          >
            User Profile
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
                background: "orange"
              }}
            >
              Home
          </NavLink>{" "}
            <NavLink
              to="/about"
              exact
              style={link}
              activeStyle={{
                background: "orange"
              }}
            >
              About
          </NavLink>{" "}
            <NavLink
              to="/orders"
              exact
              style={link}
              activeStyle={{
                background: "orange"
              }}
            >
              Orders
          </NavLink>{" "}
            <NavLink
              to="/userprofile"
              exact
              style={link}
              activeStyle={{
                background: "orange"
              }}
            >
              User Profile
          </NavLink>
          </div>
        </div>
      );
  }
}
