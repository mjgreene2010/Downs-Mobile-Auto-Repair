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
import UserProfile from "./Components/UserProfile";
import "./App.css";
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

    isLoggedIn: false
  };

  setCurrentUser = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    this.setState({
      token,
      user
    });
  };

  isLoggedIn = () => {
    if (this.state.token === null) {
      return this.setState({ isLoggedIn: false });
    } else {
      return this.setState({ isLoggedIn: true });
    }
  };

  render() {
    return this.state.user.admin === true ? (
      <div className="container">
        <hr />
        <div className="header">Down's Mobile Auto Repair</div>
        <hr />
        <div className="header" />
        <br />
        <Router>
          <React.Fragment>
            <Route
              exact
              path="/users/:id"
              render={props => (
                <PreHome
                  {...props}
                  currentName={this.state.user.first_name}
                  token={this.state.token}
                  isLoggedIn={this.state.isLoggedIn}
                />
              )}
            />

            <Nav user_id={this.state.user.id} user={this.state.user.admin} />

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
              render={props => (
                <Admin
                  {...props}
                  token={this.state.token}
                  user={this.state.user}
                />
              )}
            />

            <Route exact path="/about" component={About} />

            <Route exact path="/userprofile" />

            <Route
              exact
              path="/orders"
              render={props => (
                <Orders
                  {...props}
                  token={this.state.token}
                  user={this.state.user.id}
                />
              )}
            />
          </React.Fragment>
        </Router>
      </div>
    ) : (
        // );
        <div>
          <hr />
          <div className="header">Down's Mobile Auto Repair</div>
          <hr />
          <div className="header" />

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
                    currentName={this.state.user.first_name}
                    token={this.state.token}
                  />
                )}
              />

              <Nav user_id={this.state.user.id} />
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
                render={props => (
                  <Service
                    {...props}
                    token={this.state.token}
                    user={this.state.user}
                  />
                )}
              />

              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/orders"
                render={props => (
                  <Orders
                    {...props}
                    user={this.state.user.id}
                    token={this.state.token}
                  />
                )}
              />

              <Route
                exact
                path="/userprofile/:id"
                render={props => (
                  <UserProfile
                    {...props}
                    user={this.state.user.id}
                    token={this.state.token}
                  />
                )}
              />
            </React.Fragment>
          </Router>
        </div>
      );
  }
}
