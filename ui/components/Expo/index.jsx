import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import {filter, values, whereEq} from "ramda"
import Radium from "radium"

import Ticket from "../Ticket/index.jsx"

const styles = {
  expo: {
    display: "flex"
  }
}

@Radium
@connect((state) => {
  const isCompleted = whereEq({completed: true})
  const inTheQueue = whereEq({completed: false})
  const onlyQueue = filter(inTheQueue)
  const onlyCompleted = filter(isCompleted)

  return {
    tickets: onlyQueue(values(state.tickets)),
    ticketsCompleted: onlyCompleted(values(state.tickets))
  }
})
class Expo extends Component {

  static propTypes = {
    tickets: PropTypes.array.isRequired,
    ticketsCompleted: PropTypes.array.isRequired
  }

  static defaultProps = {
    tickets: [],
    ticketsCompleted: []
  }

  renderTicket (ticket) {
    return (
      <Ticket
        key={ticket.orderNumber}
        courierETA={ticket.courierETA}
        courierName={ticket.courierName}
        customerAddress={ticket.customerAddress}
        customerName={ticket.customerName}
        orderNumber={ticket.orderNumber} />
    )
  }

  renderTickets (tickets) {
    return tickets.map(this.renderTicket)
  }

  render () {
    return (
      <div>
        <section style={styles.expo}>
          {this.renderTickets(this.props.tickets)}
        </section>
        <section style={styles.expo}>
          {this.renderTickets(this.props.ticketsCompleted)}
        </section>
      </div>
    )
  }
}

export default Expo
