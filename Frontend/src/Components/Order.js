import React, { Component } from "react";
import { Table } from "semantic-ui-react";
// import Button from "boostrap";

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
    let orderStatus = { ...this.state.myOrders };
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
          <Table celled class="ui celled table">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Request </Table.HeaderCell>
                <Table.HeaderCell>Request Date </Table.HeaderCell>
                <Table.HeaderCell>Request Time</Table.HeaderCell>
                <Table.HeaderCell>Details </Table.HeaderCell>

                <Table.HeaderCell>Accept/Decline</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {filteredOrders.map(data => {
                var a = new Date(data.requested_time_earliest);
                var b = new Date(data.requested_time_latest);

                return (
                  <Table.Row key={data.id}>
                    <Table.Cell>Fixmy car</Table.Cell>
                    <Table.Cell>{data.requested_date}</Table.Cell>
                    <Table.Cell>
                      {a.getUTCHours()}:{a.getUTCMinutes()} to {b.getUTCHours()}
                      :{b.getUTCMinutes()}
                    </Table.Cell>

                    <Table.Cell>{data.details}</Table.Cell>
                    <Table.Cell>{this.renderOrderStatus()}</Table.Cell>
                    <Table.Cell>
                      {" "}
                      <button onClick={() => this.deleteOrder(data.id)}>
                        Delete
                      </button>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}
