import React, { Component } from "react";
import Modals from "./Modals";
// import Modal from "react-modal";

// Modal.setAppElement("#root");

export default class Admin extends Component {
  state = {
    orderData: [],
    modalOpen: false,
    decision: null
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

  acceptOrder = id => {
    // console.log(this.state.decision);
    return (
      this.setState({ decision: true }),
      fetch(`http://localhost:3000/services/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `BEARER ${this.props.token}`
        },
        body: JSON.stringify({
          decision: true
        })
      }).then(() => this.allOrders())
    );
  };

  declineOrder = id => {
    return (
      this.setState({ decision: false }),
      fetch(`http://localhost:3000/services/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `BEARER ${this.props.token}`
        },
        body: JSON.stringify({
          decision: false
        })
      }).then(() => this.allOrders())
    );
  };

  // return {(decision === true) ? "Accept" ? "Decline"}}

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
      .then(() => this.allOrders());
  };

  renderOrderStatus = order => {
    // console.log(order);
    if (order === true) {
      return "Accept";
    } else if (order === false) {
      return "Decline";
    } else {
      return "n/a";
    }
  };

  openModal = id => {
    this.setState({ modalOpen: true });
  };

  afterOpenModel = () => {
    this.subtitle.style.color = "#f00";
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    console.log(this.state.modalOpen);
    // console.log("this is order data", this.state.orderData);
    // console.log("child", this.state.orderData.decision);
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
              {this.state.orderData.map(order => {
                // console.log("this is order in the map", order);
                // var a = new Date(order.requested_time_earliest);
                // var b = new Date(order.requested_time_latest);
                return (
                  <tr key={order.id}>
                    <td>
                      {order.user.first_name} {order.user.last_name}
                    </td>
                    <td>Fix my car</td>
                    <td>{this.renderOrderStatus(order.decision)}</td>
                    <td>
                      {this.state.modalOpen === true && (
                        <Modals
                          data={order}
                          isOpen={this.state.modalOpen}
                          onAfterOpen={this.afterOpenModal}
                          onRequestClose={this.closeModal}
                          acceptOrder={this.acceptOrder}
                          declineOrder={this.declineOrder}
                        />
                      )}
                      <button onClick={() => this.openModal(order.id)}>
                        Open
                      </button>
                      <button onClick={() => this.deleteOrder(order.id)}>
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
