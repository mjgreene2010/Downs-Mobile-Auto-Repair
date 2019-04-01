import React, { Component } from "react";

import { Link } from "react-router-dom";
// import logo from "./logo.svg";
// import "./App.css";

class PreHome extends Component {
  logOut = () => {
    return (this.props.token = null ? "" : localStorage.clear());
  };
  render() {
    const first_name = this.props.currentName;
    return (
      <div>
        <div>
          <span style={{ float: "left" }}> {first_name} </span>/
          <Link
            to="/users/null"
            style={{ float: "right" }}
            onClick={this.logOut}
          >
            Log out
          </Link>
        </div>
        <span style={{ float: "right", width: "13%" }}>
          <span style={{ float: "left" }}>
            <Link
              to={"/login"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Login/
            </Link>
          </span>
          <span>
            <Link
              to={"/signup"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Sign Up
            </Link>
          </span>
          <br style={{ lineHeight: "2rem" }} />
        </span>
      </div>
    );
  }
}

export default PreHome;
