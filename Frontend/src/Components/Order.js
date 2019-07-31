import React, { Component } from "react";
import { Table } from "semantic-ui-react";

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

  renderOrderStatus = order => {
    if (order === true) {
      return "Accept";
    } else if (order === false) {
      return "Decline";
    } else {
      return "pending";
    }
  };

  render() {
    let filteredOrders = this.state.myOrders.filter(data => {
      return this.props.user === data.user_id;
    });

    return (
      <div>
        <div>
          <h1>Orders</h1>
          <Table celled>
            <Table.Header>
              <Table.Row className="table-header">
                <Table.HeaderCell className="ui-celled-table">
                  Request
                </Table.HeaderCell>
                <Table.HeaderCell className="ui-celled-table">
                  Request Date
                </Table.HeaderCell>
                <Table.HeaderCell className="ui-celled-table">
                  Request Time
                </Table.HeaderCell>
                <Table.HeaderCell className="ui-celled-table">
                  Details
                </Table.HeaderCell>
                <Table.HeaderCell className="ui-celled-table">
                  Accept/Decline
                </Table.HeaderCell>
                <Table.HeaderCell className="ui-celled-table">
                  Delete
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {filteredOrders.map(data => {
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
                  <Table.Row key={data.id}>
                    <Table.Cell className="tableCell">Fix my car</Table.Cell>
                    <Table.Cell className="tableCell">
                      {data.requested_date}
                    </Table.Cell>
                    <Table.Cell className="tableCell">
                      {earliestHours}:{earliestMinutes} to {latestHours}:
                      {latestMinutes}
                    </Table.Cell>
                    <Table.Cell className="tableCell">
                      {data.details}
                    </Table.Cell>
                    <Table.Cell className="tableCell">
                      {this.renderOrderStatus(data.decision)}
                    </Table.Cell>
                    <Table.Cell className="tableCell">
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
