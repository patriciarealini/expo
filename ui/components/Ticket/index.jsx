import React, {Component, PropTypes} from "react"
import Radium from "radium"

import {markTicketCompleted} from "../../actions/index.js"

const styles = {
  pickUpButton: {

  },
  ticket: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "200px",
    border: "1px solid black"
  }
}

const onClickCompleted = (dispatch, orderNumber) => () => {
  dispatch(markTicketCompleted(orderNumber))
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

  renderPickUpButton () {
    if (!this.props.completed) {
      return (
        <button onClick={onClickCompleted(this.props.dispatch, this.props.orderNumber)} style={styles.pickUpButton}>
          Picked Up
        </button>
      )
    }
    return null
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
          {this.renderPickUpButton()}
        </div>
      </div>
    )
  }
}

export default Ticket
