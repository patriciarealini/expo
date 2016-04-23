import React, {Component} from "react";
import Radium from "radium";

@Radium
class Tickets extends Component {

  render () {

    return (
      <div>
        <div style={styles.ticket}>
          <h2>Order 0001</h2>
          <p>Customer Name</p>
          <p>Customer Address</p>
          <p>Courier Name</p>
          <p>Pick Up ETA</p>
        </div>
      </div>
    );
  }
};

const styles = {
  ticket: {
    
  }
};

export default Tickets;
