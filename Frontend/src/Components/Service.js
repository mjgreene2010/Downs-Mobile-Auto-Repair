import React, { Component } from "react";
import { Link } from "react-router-dom";
import DropdownDate from "react-dropdown-date";

export default class Service extends Component {
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
    }
    return (
      <div>
        <div>
          <div style={{ fontSize: "25px" }}>{title} </div>
          <div style={{ marginTop: "10px" }}>
            <label>
              Requested Date: <input type="date" />
            </label>
            <br style={{ lineHeight: "2rem" }} />
            <label>
              Requested Time Frame: <input type="time" /> to{" "}
              <input type="time" />
            </label>
            <br style={{ lineHeight: "2rem" }} />
            <label>
              Detailed Notes: <textarea />
            </label>
            <br style={{ lineHeight: "2rem" }} />
          </div>
          <input type="submit" />
        </div>
        <br style={{ lineHeight: "2rem" }} />
        <button>
          <Link to={"/"} style={{ color: "black", textDecoration: "none" }}>
            Back
          </Link>
        </button>
      </div>
    );
  }
}
