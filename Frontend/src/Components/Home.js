import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    fetch(`http://localhost:3000/users/${this.props.match.params.id}`, {
      headers: {
        Authorization: `BEARER ${this.props.token}`
      }
    })
      .then(res => res.json())
      .then(user => this.setState({ user }));
  }

  render() {
    const { first_name } = this.state.user;
    let link = { textDecoration: "none" };

    return (
      <div>
        <div>
          <h1>{first_name}</h1>
        </div>
        <br style={{ lineHeight: "1rem" }} />

        <Link to={`/service/oil-change`} style={link}>
          <span id="oil_change" value="Oil Change">
            Oil Change
          </span>
        </Link>
        <br style={{ lineHeight: "2rem" }} />
        <Link to={`/service/brakes`} style={link}>
          <span id="brakes" value="Brakes">
            Brakes
          </span>
        </Link>
        <br style={{ lineHeight: "2rem" }} />
        <Link to={"/service/tune-ups"} style={link}>
          <span id="tune_ups" value="Tune Ups">
            Tune-Ups
          </span>
        </Link>
        <br style={{ lineHeight: "2rem" }} />
        <Link to={"/service/starters"} style={link}>
          <span id="starters" value="Starters">
            Starters
          </span>
        </Link>
        <br style={{ lineHeight: "2rem" }} />
        <Link to={"/service/alternators"} style={link}>
          <span id="alternators" value="Alternators">
            Alternators
          </span>
        </Link>
        <br style={{ lineHeight: "2rem" }} />
        <Link to={"/service/batteries"} style={link}>
          <span id="batteries" value="Batteries">
            Batteries
          </span>
        </Link>
        <br style={{ lineHeight: "2rem" }} />
        <Link to={"/service/tire-repair"} style={link}>
          <span id="tire_repair" value="Tire Repair">
            Tire Repair
          </span>
        </Link>
        <br style={{ lineHeight: "2rem" }} />
        <Link to={"/service/power-steering"} style={link}>
          <span id="power_steering" value="Power Steering">
            Power Steering
          </span>
        </Link>
        <br style={{ lineHeight: "2rem" }} />
        <Link to={"/service/other"} style={link}>
          <span id="other" value="Other">
            Other
          </span>
        </Link>
      </div>
    );
  }
}
