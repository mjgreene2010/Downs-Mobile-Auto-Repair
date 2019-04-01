// import ReactDOM from "react-dom";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PreHome from "./Components/PreHome";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Service from "./Components/Service";
import Admin from "./Components/Admin";
import About from "./Components/About";
import Orders from "./Components/Order";
// import * as serviceWorker from "./serviceWorker";

let user;
try {
  user = JSON.parse(localStorage.getItem("user"));
} catch (err) {
  user = {};
}

export default class App extends Component {
  state = {
    token: localStorage.getItem("token"),
    user: user || {},
    user_id: localStorage.getItem("user_id"),
    first_name: localStorage.getItem("first_name"),
    isLoggedIn: false
  };

  setCurrentUser = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("user_id", user.id);
    localStorage.setItem("first_name", user.first_name);
    this.setState({
      token,
      user,
      user_id: localStorage.getItem("user_id"),
      first_name: localStorage.getItem("first_name")
    });
  };

  isLoggedIn = () => {
    this.setState({ isLoggedIn: true });
  };

  fullName = () => {
    this.state.first_name.join(this.state.last_name);
  };

  render() {
    console.log(this.state.user);
    return this.state.user.admin === true ? (
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
        {/* <span style={{ float: "right" }}> {first_name} </span> */}
        <br />

        <Router>
          <React.Fragment>
            <Route
              exact
              path="/users/:id"
              render={props => (
                <PreHome
                  {...props}
                  currentName={this.state.first_name}
                  token={this.state.token}
                />
              )}
            />

            <Nav user_id={this.state.user_id} user={this.state.user.admin} />

            <Route
              path="/users/:id"
              component={props => <Home {...props} token={this.state.token} />}
            />
            <Route
              exact
              path="/login"
              render={props => (
                <Login
                  {...props}
                  onLogin={this.setCurrentUser}
                  isLoggedIn={this.isLoggedIn}
                />
              )}
            />
            <Route exact path="/signup" component={SignUp} />
            <Route
              exact
              path="/service/:id"
              render={props => <Service {...props} token={this.state.token} />}
            />

            <Route
              exact
              path="/admin"
              render={props => <Admin {...props} token={this.state.token} />}
            />

            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/orders"
              render={props => <Orders {...props} token={this.state.token} />}
            />
          </React.Fragment>
        </Router>
      </div>
    ) : (
      // );
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
        {/* <span style={{ float: "right" }}> {first_name} </span> */}
        <br />

        <Router>
          <React.Fragment>
            <Route
              exact
              path="/users/:id"
              render={props => (
                <PreHome
                  {...props}
                  currentName={this.state.first_name}
                  token={this.state.token}
                />
              )}
            />

            <Nav user_id={this.state.user_id} />
            <Route
              path="/users/:id"
              component={props => <Home {...props} token={this.state.token} />}
            />
            <Route
              exact
              path="/login"
              render={props => (
                <Login
                  {...props}
                  onLogin={this.setCurrentUser}
                  isLoggedIn={this.isLoggedIn}
                />
              )}
            />
            <Route exact path="/signup" component={SignUp} />
            <Route
              exact
              path="/service/:id"
              render={props => <Service {...props} token={this.state.token} />}
            />

            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/orders"
              render={props => <Orders {...props} token={this.state.token} />}
            />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}
