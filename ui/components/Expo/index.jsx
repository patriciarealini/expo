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

const renderTicket = (dispatch) => (ticket) => {
  return (
    <Ticket
      dispatch={dispatch}
      key={ticket.orderNumber}
      completed={ticket.completed}
      courierETA={ticket.courierETA}
      courierName={ticket.courierName}
      customerAddress={ticket.customerAddress}
      customerName={ticket.customerName}
      orderNumber={ticket.orderNumber} />
  )
}

const renderTickets = (tickets, dispatch) => {
  return tickets.map(renderTicket(dispatch))
}

@Radium
@connect((state) => {
  const isCompleted = whereEq({completed: true})
  const isQueued = whereEq({completed: false})
  const onlyQueue = filter(isQueued)
  const onlyCompleted = filter(isCompleted)

  return {
    queued: onlyQueue(values(state.tickets)),
    completed: onlyCompleted(values(state.tickets))
  }
})
class Expo extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    queued: PropTypes.array.isRequired,
    completed: PropTypes.array.isRequired
  }

  static defaultProps = {
    queued: [],
    completed: []
  }

  render () {
    return (
      <div>
        <section style={styles.expo}>
          {renderTickets(this.props.queued, this.props.dispatch)}
        </section>
        <section style={styles.expo}>
          {renderTickets(this.props.completed, this.props.dispatch)}
        </section>
      </div>
    )
  }
}

export default Expo
