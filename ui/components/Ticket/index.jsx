import React, {Component, PropTypes} from "react"
import Radium from "radium"

import moment from "moment"

import {markTicketCompleted} from "../../actions/index.js"

const styles = {
  ticketContainer: {
    marginTop: 115
  },
  ticket: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: 350,
    backgroundColor: "#FFDF0F",
    borderTop: "4px dotted white",
    borderRight: "4px solid white",
    borderBottom: "4px dotted white",
    borderLeft: "4px solid white",
    margin: "10px 5px",
    paddingTop: 30
  },
  order: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "95%",
    margin: "2.5%"
  },
  info: {
    width: 100,
    color: "#5d5d5d",
    fontFamily: "'Andale Mono', AndaleMono, monospace",
    borderBottom: "2px solid #FFFFFF",
    paddingLeft: 5
  },
  details: {
    flex: 1,
    color: "#5d5d5d",
    fontFamily: "'Andale Mono', AndaleMono, monospace",
    borderLeft: "2px solid #FFFFFF",
    borderBottom: "2px solid #FFFFFF",
    paddingLeft: 5
  },
  pickUpButton: {
    color: "#FFFFFF",
    fontSize: "1.7em",
    width: "95%",
    height: 60,
    alignSelf: "flex-end",
    margin: "2.5%"
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
    orderNumber: PropTypes.number.isRequired,
    updatedAt: PropTypes.instanceOf(Date).isRequired
  }

  shouldComponentUpdate (nextProps) {
    return this.props.updatedAt !== nextProps.updatedAt
  }

  renderOrderNumber (orderNumber) {
    const number = orderNumber.toString()

    return Array(Math.max(0, 5 - number.length)).join('0') + number;
  }

  renderPickUpButton () {
    const {
      completed,
      dispatch,
      orderNumber
    } = this.props

    if (!completed) {
      return (
        <button onClick={onClickCompleted(dispatch, orderNumber)} style={styles.pickUpButton}>
          Picked Up
        </button>
      )
    }
    return null
  }

  render () {
    const {
      courierETA,
      courierName,
      customerAddress,
      customerName,
      orderNumber
    } = this.props

    return (
      <div style={styles.ticketContainer}>
        <div style={styles.ticket}>
          <ul style={styles.order}>
            <li style={styles.info}>Order #</li>
            <li style={styles.details}>{this.renderOrderNumber(orderNumber)}</li>
          </ul>
          <ul style={styles.order}>
            <li style={styles.info}>Customer</li>
            <li style={styles.details}>{customerName}</li>
          </ul>
          <ul style={styles.order}>
            <li style={styles.info}>Customer Address</li>
            <li style={styles.details}>{customerAddress}</li>
          </ul>
          <ul style={styles.order}>
            <li style={styles.info}>Courier</li>
            <li style={styles.details}>{courierName}</li>
          </ul>
          <ul style={styles.order}>
            <li style={styles.info}>Courier ETA</li>
            <li style={styles.details}>{moment(courierETA).format("MMM D YYYY, HH:mm")}</li>
          </ul>
          {this.renderPickUpButton()}
        </div>
      </div>
    )
  }
}

export default Ticket
