import React, { Component } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default class OrderDetails extends Component {
  whenModalIsOpen = () => {
    this.subtitle.style.color = "#f00";
  };

  state = {
    isOpen: false
  };

  render() {
    const modalStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        backgroundColor: "gray",
        marginRight: "-50%"
        // transform: "translate(-50%, -50%)"
      }
    };
    let data = this.props.data;
    let earliest = new Date(data.requested_time_earliest);
    let latest = new Date(data.requested_time_latest);
    let earliestHours = earliest.getUTCHours();
    let earliestMinutes = earliest.getUTCMinutes();
    let latestHours = latest.getUTCHours();
    let latestMinutes = latest.getUTCMinutes();

    earliestHours = ("0" + earliestHours).slice(-2);
    earliestMinutes = ("0" + earliestMinutes).slice(-2);
    latestHours = ("0" + latestHours).slice(-2);
    latestMinutes = ("0" + latestMinutes).slice(-2);

    return (
      <span>
        <button onClick={() => this.setState({ isOpen: true })}>Open</button>
        <Modal isOpen={this.state.isOpen}>
          <div onClick={this.props.onAfterOpen}>
            <h2 ref={subtitle => (this.subtitle = subtitle)}>
              Order Details{" "}
              <button onClick={() => this.setState({ isOpen: false })}>
                {" "}
                x
              </button>
            </h2>
            <div>
              <form>
                <p>
                  <label>
                    Name: {data.user.first_name} {data.user.last_name}
                  </label>
                </p>

                <p>
                  <label>Requested Date: {data.requested_date}</label>
                  <br />
                  <label>
                    Requested Time: {earliestHours}:{earliestMinutes} to{" "}
                    {latestHours}:{latestMinutes}
                  </label>
                  <br />
                  <label>Details: {data.details}</label>
                  <br />
                </p>
                <button
                  type="button"
                  onClick={() => this.props.acceptOrder(data.id)}
                >
                  Accept
                </button>
                <button
                  type="button"
                  onClick={() => this.props.declineOrder(data.id)}
                >
                  Decline
                </button>
              </form>
            </div>
          </div>
        </Modal>
      </span>
    );
  }
}
