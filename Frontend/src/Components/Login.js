import React, { Component } from "react";
// import { Link } from "react-router-dom";

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleLogin = () => {
    fetch("http://localhost:3000/auth", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
        // Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(({ token, user }) => {
        this.props.onLogin(token, user);
        this.props.history.push(`/users/${user.id}`);
        this.props.isLoggedIn();
        // this.props.history.push(`/`);
        // this.props.
      });
    // this.props.history.push(`/`);
  };

  handleChange = e => {
    this.setState({ [e.target.className]: e.target.value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <br />
        <div>
          <div>LOG IN</div>
        </div>
        <br />
        <div>
          <label>Username:</label>
          <input
            className="username"
            type="text"
            value={username}
            placeholder="Enter Username"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            className="password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="submit"
            value="Login"
            onClick={() => this.handleLogin()}
          />
        </div>
      </div>
    );
  }
}
