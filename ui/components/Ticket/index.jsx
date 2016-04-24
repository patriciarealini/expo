import React, {Component, PropTypes} from "react"
import Radium from "radium"

import {markTicketCompleted} from "../../actions/index.js"

const styles = {
  ticket: {
    flex: 1,
    width: "90%",
    border: "1px solid black"
  }
}

@Radium
class Ticket extends Component {

  static propTypes = {
    completed: PropTypes.bool.isRequired,
    courierETA: PropTypes.instanceOf(Date).isRequired,
    courierName: PropTypes.string.isRequired,
    customerAddress: PropTypes.string.isRequired,
    customerName: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    orderNumber: PropTypes.number.isRequired
  }

  onClickCompleted () {
    this.props.dispatch(markTicketCompleted(this.props.orderNumber))
  }

  render () {
    return (
      <div>
        <div style={styles.ticket}>
          <h2>Order Number: {this.props.orderNumber}</h2>
          <p>Customer: {this.props.customerName}</p>
          <p>Address: {this.props.customerAddress}</p>
          <p>Courier: {this.props.courierName}</p>
          <p>Courier ETA: {this.props.courierETA.toISOString()}</p>
          <button onClick={this.onClickCompleted}>Pick Up(add if statement)</button>
        </div>
      </div>
    )
  }
}

export default Ticket
