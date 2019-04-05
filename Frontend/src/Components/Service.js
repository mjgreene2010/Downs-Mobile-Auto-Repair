import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Service extends Component {
  state = {
    requested_date: "",
    requested_time_earliest: "",
    requested_time_latest: "",
    details: ""
  };

  handleChange = e => {
    // if (
    //   e.target.className === "details" ||
    //   e.target.className === "requested_date"
    // ) {
    //   this.setState({ [e.target.className]: e.target.value });
    // } else {
    //   let data = new Date(e.target.value).toLocaleTimeString("en-US");
    //   this.setState({
    //     [e.target.className]: data
    //   });
    // }

    this.setState({ [e.target.className]: e.target.value });
  };

  handleServiceSubmit = () => {
    const {
      requested_date,
      requested_time_earliest,
      requested_time_latest,
      details
    } = this.state;

    // const data = (this.state.requested_date,
    // this.state.requested_time_earliest,
    // this.state.requested_time_latest,
    // this.state.detals);

    fetch("http://localhost:3000/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `BEARER ${this.props.token}`
      },
      body: JSON.stringify({
        requested_date,
        requested_time_earliest,
        requested_time_latest,
        details
      })

      // requested_date: {},
      // requested_time_earliest: {},
      // requested_time_latest: {},
    });
  };

  render() {
    let title;
    switch (this.props.match.params.id) {
      case "oil-change":
        title = "Oil Change";
        break;
      case "brakes":
        title = "Brakes";
        break;
      case "tune-ups":
        title = "Tune Ups";
        break;
      case "starters":
        title = "Starters";
        break;
      case "alternators":
        title = "Alternators";
        break;
      case "batteries":
        title = "Batteries";
        break;
      case "tire-repair":
        title = "Tire Repair";
        break;
      case "power-steering":
        title = "Power Steering";
        break;
      case "other":
        title = "Other";
        break;
      default:
        return "";
    }

    const {
      requested_date,
      requested_time_earliest,
      requested_time_latest,
      details
    } = this.state;
    return (
      <div>
        <div className="ui eight wide column">
          <div style={{ fontSize: "25px" }}>{title} </div>
          <div style={{ marginTop: "10px" }}>
            <label>
              Requested Date:{" "}
              <input
                type="date"
                className="requested_date"
                value={requested_date}
                onChange={this.handleChange}
              />
            </label>
            <br style={{ lineHeight: "2rem" }} />
            <label>
              Requested Time Frame:{" "}
              <input
                type="time"
                className="requested_time_earliest"
                value={requested_time_earliest}
                onChange={this.handleChange}
              />{" "}
              to{" "}
              <input
                type="time"
                className="requested_time_latest"
                value={requested_time_latest}
                onChange={this.handleChange}
              />
            </label>
            <br style={{ lineHeight: "2rem" }} />
            <label>
              Detailed Notes:{" "}
              <textarea
                className="details"
                value={details}
                placeholder="What type of service are you requesting?"
                onChange={this.handleChange}
              />
            </label>
            <br style={{ lineHeight: "2rem" }} />
          </div>
          <Link
            to={`/users/${this.props.user.id}`}
            style={{ color: "black", textDecoration: "none" }}
          >
            <input type="submit" onClick={() => this.handleServiceSubmit()} />
          </Link>
        </div>
        <br style={{ lineHeight: "2rem" }} />
        <button>
          <Link
            to={`/users/${this.props.user.id}`}
            style={{ color: "black", textDecoration: "none" }}
          >
            Back
          </Link>
        </button>
      </div>
    );
  }
}
