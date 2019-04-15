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
      <div>
        <div className="prehome">
          <div className="side1">
            <Link
              to={"/login"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Login/
            </Link>
          </div>
          <div className="side2">
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
      <div className="prehome">
        <span style={{}}>{first_name}</span>/
        <Link to="/users/null" style={{}} onClick={this.logOut}>
          Log out
        </Link>
      </div>
    );
  }
}
