import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";

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
    let link = { color: "gray", textDecoration: "none" };

    return (
      <div>
        <div className="currentUser">
          <h1>{first_name}</h1>
        </div>
        {/* <br style={{ lineHeight: "1rem" }} /> */}
        <Card>
          <Card.Content className="card">
            <Link to={`/service/oil-change`} style={link}>
              <span value="Oil Change">
                <Card.Header className="cardheader">Oil Change</Card.Header>
              </span>
            </Link>
          </Card.Content>
        </Card>
        <br style={{ lineHeight: "2rem" }} />
        <Card>
          <Card.Content className="card">
            {/* <Card.Header>Brakes</Card.Header> */}
            <Link to={`/service/brakes`} style={link}>
              <span value="Brakes">
                <Card.Header className="cardheader">Brakes</Card.Header>
              </span>
            </Link>
          </Card.Content>
        </Card>
        <br style={{ lineHeight: "2rem" }} />
        <Card>
          <Card.Content className="card">
            <Link to={"/service/tune-ups"} style={link}>
              <span id="tune_ups" value="Tune Ups">
                <Card.Header className="cardheader">Tune-ups</Card.Header>
              </span>
            </Link>
          </Card.Content>
        </Card>
        <br style={{ lineHeight: "2rem" }} />
        <Card>
          <Card.Content className="card">
            <Link to={"/service/starters"} style={link}>
              <span id="starters" value="Starters">
                <Card.Header className="cardheader">Starters</Card.Header>
              </span>
            </Link>
          </Card.Content>
        </Card>
        <br style={{ lineHeight: "2rem" }} />
        <Card>
          <Card.Content className="card">
            <Link to={"/service/alternators"} style={link}>
              <span id="alternators" value="Alternators">
                <Card.Header className="cardheader">Alternators</Card.Header>
              </span>
            </Link>
          </Card.Content>
        </Card>
        <br style={{ lineHeight: "2rem" }} />
        <Card>
          <Card.Content className="card">
            <Link to={"/service/batteries"} style={link}>
              <span id="batteries" value="Batteries">
                <Card.Header className="cardheader">Batteries</Card.Header>
              </span>
            </Link>
          </Card.Content>
        </Card>
        <br style={{ lineHeight: "2rem" }} />
        <Card>
          <Card.Content className="card">
            <Link to={"/service/tire-repair"} style={link}>
              <span id="tire_repair" value="Tire Repair">
                <Card.Header className="cardheader">Tire Repairs</Card.Header>
              </span>
            </Link>
          </Card.Content>
        </Card>
        <br style={{ lineHeight: "2rem" }} />
        <Card>
          <Card.Content className="card">
            <Link to={"/service/power-steering"} style={link}>
              <span id="power_steering" value="Power Steering">
                <Card.Header className="cardheader">Power Steering</Card.Header>
              </span>
            </Link>
          </Card.Content>
        </Card>

        <br style={{ lineHeight: "2rem" }} />
        <Card>
          <Card.Content className="card">
            <Link to={"/service/other"} style={link}>
              <span id="other" value="Other">
                <Card.Header className="cardheader">
                  <Card.Meta>Other</Card.Meta>
                </Card.Header>
              </span>
            </Link>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
