import React, { Component } from "react";
import Modal from "react-modal";

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

Modal.setAppElement("#root");

export default class Modals extends Component {
  whenModalIsOpen = () => {
    this.subtitle.style.color = "#f00";
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
    // console.log(data);
    // let data = Object.assign(...this.props.data);
    let a = new Date(data.requested_time_earliest);
    let b = new Date(data.requested_time_latest);
    return (
      <div style={modalStyles} onClick={this.props.onAfterOpen}>
        <h2 ref={subtitle => (this.subtitle = subtitle)}>
          Order Details{" "}
          <button onClick={() => this.props.onRequestClose()}>x</button>
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
                Requested Time: {a.getUTCHours()}:{a.getUTCMinutes()} to{" "}
                {b.getUTCHours()}:{b.getUTCMinutes()}
                {/* {data.requested_time_latest} */}
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
    );
  }
}
