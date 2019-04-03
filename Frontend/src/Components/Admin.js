import React, { Component } from "react";
import Modals from "./Modals";
import Modal from "react-modal";

Modal.setAppElement("#root");

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
    console.log(this.state.decision);
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
      }).then(this.allOrders())
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
      })
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
      .then(res => this.allOrders());
  };

  renderOrderStatus = order => {
    if (order.decision === true) {
      return "Accept";
    } else if (order.decision === false) {
      return "Decline";
    } else {
      return "n/a";
    }
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
    // const modalStyles = {
    //   content: {
    //     top: "50%",
    //     left: "50%",
    //     right: "auto",
    //     bottom: "auto",
    //     backgroundColor: "gray",
    //     marginRight: "-50%"
    //     // transform: "translate(-50%, -50%)"
    //   }
    // };
    console.log("this is order data", this.state.orderData);
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
                console.log("this is order in the map", order);
                // var a = new Date(order.requested_time_earliest);
                // var b = new Date(order.requested_time_latest);
                return (
                  <tr key={order.id}>
                    <td>
                      {order.id}
                      {order.user.first_name} {order.user.last_name}
                    </td>
                    <td>Fix my car</td>
                    <td>{this.renderOrderStatus(order)}</td>
                    <td>
                      <button onClick={this.openModal}>Open</button>
                      <Modals
                        data={order}
                        isOpen={this.state.modalOpen}
                        onAfterOpen={this.whenModalIsOpen}
                        onRequestClose={this.closeModal}
                        acceptOrder={this.acceptOrder}
                        declineOrder={this.declineOrder}
                      />
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
