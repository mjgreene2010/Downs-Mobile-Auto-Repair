import React, { Component } from "react";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import { Link } from "react-router-dom";
// import logo from "./logo.svg";
// import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div
          className="App"
          style={{
            fontSize: "50px",
            float: "left",
            width: "88%"
          }}
        >
          Down's Mobile Auto Repair
        </div>
        <br />
        <div style={{ float: "right", width: "12%" }}>
          <div style={{ float: "left" }}>
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
    );
  }
}

export default App;
