import React, { Component } from "react";
import OrderDetails from "./OrderDetails";
// import Modal from "react-modal";

// Modal.setAppElement("#root");

export default class Admin extends Component {
  state = {
    orderData: [],
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

  render() {
    // console.log("child", this.state.orderData.decision);
    return (
      <div>
        <h1>Order Requests</h1>
        <div>
          <table>
            <tbody>
              <tr className="table-header">
                <th className="ui-celled-table"> Name </th>
                <th className="ui-celled-table">Request </th>
                <th className="ui-celled-table">Accept/Decline</th>
                <th className="ui-celled-table">Go To Order </th>
              </tr>
              {this.state.orderData.map(order => {
                // console.log("this is order in the map", order);
                // var a = new Date(order.requested_time_earliest);
                // var b = new Date(order.requested_time_latest);
                return (
                  <tr key={order.id}>
                    <td className="tableCell">
                      {order.user.first_name} {order.user.last_name}
                    </td>
                    <td className="tableCell">Fix my car</td>
                    <td className="tableCell">
                      {this.renderOrderStatus(order.decision)}
                    </td>
                    <td className="tableCell">
                      <OrderDetails data={order} />
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
