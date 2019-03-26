import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
  state = { first_name: "", last_name: "", username: "", password: "" };

  handleSignUp = () => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          username: this.state.username,
          password: this.state.password
        }
      })
    })
      .then(res => res.json())
      .then((first_name, last_name, username, password) =>
        this.setState({ first_name, last_name, username, password })
      );
  };

  handleChange = e => {
    this.setState({ [e.target.className]: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          <div>SIGN UP</div>
        </div>
        <br />
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
            className="first_name"
            type="text"
            placeholder="Enter First Name"
            value={this.state.first_name}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            className="lastName"
            type="text"
            placeholder="Enter Last Name"
            value={this.state.last_name}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            className="username"
            type="text"
            placeholder="Enter Username"
            value={this.state.username}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="username">Password: </label>
          <input
            className="password"
            type="password"
            placeholder="Enter Password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <Link to={"/login"} style={{ textDecoration: "none", color: "black" }}>
          <div>
            <input
              type="submit"
              value="SignUp"
              onClick={() => this.handleSignUp()}
            />
          </div>
        </Link>
      </div>
    );
  }
}
