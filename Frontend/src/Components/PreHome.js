import React, { Component } from "react";

import { Link } from "react-router-dom";
// import logo from "./logo.svg";
// import "./App.css";

export default class PreHome extends Component {
  logOut = () => {
    return (this.props.token = null ? {} : localStorage.clear());
  };
  render() {
    const first_name = this.props.currentName;
    return this.props.token === null || "" ? (
      <div className="prehome">
        <div style={{ float: "auto", width: "13%" }}>
          <div style={{ float: "auto" }}>
            <Link
              to={"/login"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Login/
            </Link>
          </div>
          <div>
            <Link
              to={"/signup"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Sign Up
            </Link>
          </div>
          <br style={{ lineHeight: "2rem" }} />
        </div>
      </div>
    ) : (
      <div>
        <span style={{ float: "left" }}> {first_name} </span>/
        <Link to="/users/null" style={{ float: "right" }} onClick={this.logOut}>
          Log out
        </Link>
      </div>
    );
  }
}
