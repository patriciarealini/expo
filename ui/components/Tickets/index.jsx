import React, {Component} from "react";

class Tickets extends Component {

  render () {
    const orderstyles = {
      margin: "15px",
      border: "3px solid maroon",
      display: "flex"
    };
    const ticketStyles = {
      margin: "15px",
      border: "3px solid tomato",
      flex: "1"
    };

    return (
      <div>
        <section style={orderStyles}>
          <div style={ticketStyles}>
            <h2>Order 0001</h2>
          </div>
          <div style={ticketStyles}>
            <h2>Order 0002</h2>
          </div>
          <div style={ticketStyles}>
            <h2>Order 0003</h2>
          </div>
        </section>
      </div>
    );
  }
};

export default Tickets;
