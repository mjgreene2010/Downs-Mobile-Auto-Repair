render() {
    const { username, password } = this.state;
    return (
      <div className="loginForm">
        <form>
          <fieldset
            style={{
              backgroundColor: "white",
              width: "49%",
              margin: "25px"
              // marginTop: "15px"
            }}
          >
            <legend>LOG IN</legend>
            <label>
              Username:
              <input
                className="username"
                type="text"
                value={username}
                placeholder="Enter Username"
                onChange={this.handleChange}
              />
            </label>{" "}
            <label>
              Password:
              <input
                className="password"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={this.handleChange}
              />
            </label>{" "}
            <input
              type="submit"
              value="Login"
              onClick={() => this.handleLogin()}
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

//sign up

render() {
    return (
      <div className="sign_up_form">
        {/* <div>
          <div>SIGN UP</div>
        </div>
        <br /> */}
        <form style={{ position: "absolute" }}>
          <fieldset
            style={{
              backgroundColor: "white",
              width: "92%",
              margin: "25px",
              position: "fixed"

              // marginTop: "15px"
            }}
          >
            <legend>SIGN UP</legend>
            <label htmlFor="firstName">First Name: </label>
            <input
              className="first_name"
              type="text"
              placeholder="Enter First Name"
              value={this.state.first_name}
              onChange={e => this.handleChange(e)}
            />{" "}
            <label htmlFor="lastName">Last Name: </label>
            <input
              className="last_name"
              type="text"
              placeholder="Enter Last Name"
              value={this.state.last_name}
              onChange={e => this.handleChange(e)}
            />{" "}
            <label htmlFor="username">Username: </label>
            <input
              className="username"
              type="text"
              placeholder="Enter Username"
              value={this.state.username}
              onChange={e => this.handleChange(e)}
            />{" "}
            <label htmlFor="username">Password: </label>
            <input
              className="password"
              type="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            />{" "}
            <Link
              to={"/login"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <input
                className="login"
                type="submit"
                value="SignUp"
                onClick={() => this.handleSignUp()}
                position="absolute"
              />
            </Link>
          </fieldset>
        </form>
      </div>
    );
  }
}