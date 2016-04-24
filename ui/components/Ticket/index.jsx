import React, {Component, PropTypes} from "react"
import Radium from "radium"

@Radium
class Ticket extends Component {

  static propTypes = {
    courierETA: PropTypes.instanceOf(Date).isRequired,
    courierName: PropTypes.string.isRequired,
    customerAddress: PropTypes.string.isRequired,
    customerName: PropTypes.string.isRequired,
    orderNumber: PropTypes.number.isRequired
  }

  render () {

    return (
      <div>
        <div style={styles.ticket}>
          <h2>{this.props.orderNumber}</h2>
          <p>{this.props.customerName}</p>
          <p>{this.props.customerAddress}</p>
          <p>{this.props.courierName}</p>
          <p>{this.props.courierETA.toISOString()}</p>
        </div>
      </div>
    )
  }
}

const styles = {
  ticket: {
    border: "10px solid firebrick"
  }
}

export default Ticket
