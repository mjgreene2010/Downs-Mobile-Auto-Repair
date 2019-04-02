import React, { Component } from "react";

import Modal from "react-modal";

Modal.setAppElement("#root");

export default class Admin extends Component {
  state = {
    orderData: [],
    modalOpen: false
  };

  allOrders = () => {
    fetch("http://localhost:3000/services", {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(res => res.json())
      .then(orderData => this.setState({ orderData }));
  };

  componentDidMount = () => {
    this.allOrders();
  };

  deleteOrder = (id, e) => {
    const orders = Object.assign([], this.state.orderData);
    // orders.map(order => {
    // console.log("this is order", order.id);
    orders.splice(orders.id, 1);
    this.setState({ orders });

    fetch(`http://localhost:3000/services/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(res => res.json())
      .catch(err => err => {
        return err;
      })
      .then(res => this.allOrders());
  };

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  whenModalIsOpen = () => {
    this.subtitle.style.color = "#f00";
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
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

    console.log(this.state.orderData);
    return (
      <div>
        <h1>Order Requests</h1>
        <div>
          <table>
            <tbody>
              <tr>
                <th> Name </th>
                <th>Request </th>
                <th>Accept/Decline</th>
                <th>Go To Order </th>
              </tr>
              {this.state.orderData.map(data => {
                console.log(data);
                var a = new Date(data.requested_time_earliest);
                var b = new Date(data.requested_time_latest);
                return (
                  <tr key={data.id}>
                    <td>
                      {data.user.first_name} {data.user.last_name}
                    </td>
                    <td>Fixmy car</td>
                    <td />
                    <td>
                      <button onClick={this.openModal}>Open</button>
                      <Modal
                        className="modal"
                        isOpen={this.state.modalOpen}
                        onAfterOpen={this.whenModalIsOpen}
                        onRequestClose={this.closeModal}
                        style={modalStyles}
                      >
                        <h2 ref={subtitle => (this.subtitle = subtitle)}>
                          Order Details{" "}
                          <button onClick={this.closeModal}>x</button>
                        </h2>
                        <div>
                          <form>
                            <p>
                              <label>
                                Name: {data.user.first_name}{" "}
                                {data.user.last_name}
                              </label>
                            </p>

                            <p>
                              <label>
                                Requested Date: {data.requested_date}
                              </label>
                              <br />
                              <label>
                                Requested Time: {a.getUTCHours()}:
                                {a.getUTCMinutes()} to {b.getUTCHours()}:
                                {b.getUTCMinutes()}
                                {/* {data.requested_time_latest} */}
                              </label>
                              <br />
                              <label>Details: {data.details}</label>
                              <br />
                            </p>
                            <button>Accept</button>
                            <button>Decline</button>
                          </form>
                        </div>
                      </Modal>
                      <button onClick={() => this.deleteOrder(data.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
