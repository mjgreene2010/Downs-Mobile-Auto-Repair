import React, { Component } from "react";

export default class Order extends Component {
  state = {
    myOrders: []
  };

  myOrders = () => {
    fetch("http://localhost:3000/services", {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(res => res.json())
      .then(myOrders => this.setState({ myOrders }));
  };

  componentDidMount = () => {
    this.myOrders();
  };

  deleteOrder = (id, e) => {
    const orders = Object.assign([], this.state.myOrders);
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
      .then(res => this.myOrders());
  };

  renderOrderStatus = () => {
    let orderStatus = Object.assign(...this.state.myOrders);
    if (orderStatus.decision === true) {
      return "Accept";
    } else if (orderStatus.decision === false) {
      return "Decline";
    } else {
      return "pending";
    }
  };

  render() {
    // console.log(this.state.myOrders);
    let filteredOrders = this.state.myOrders.filter(data => {
      return this.props.user === data.user_id;
    });

    return (
      <div>
        <div>
          <h1>Orders</h1>
          <table>
            <tbody>
              <tr>
                <th>Request </th>
                <th>Request Date </th>
                <th>Request Time</th>
                <th>Details </th>

                <th>Accept/Decline</th>
                <th>Delete</th>
              </tr>

              {filteredOrders.map(data => {
                var a = new Date(data.requested_time_earliest);
                var b = new Date(data.requested_time_latest);

                return (
                  <tr key={data.id}>
                    <td>Fixmy car</td>
                    <td>{data.requested_date}</td>
                    <td>
                      {a.getUTCHours()}:{a.getUTCMinutes()} to {b.getUTCHours()}
                      :{b.getUTCMinutes()}
                    </td>

                    <td>{data.details}</td>
                    <td>{this.renderOrderStatus()}</td>
                    <td>
                      {" "}
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
