import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import {filter, values, whereEq} from "ramda"
import Radium from "radium"

import Ticket from "../Ticket/index.jsx"
import Header from "../Header/index.jsx"

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
  const onlyQueued = filter(isQueued)
  const onlyCompleted = filter(isCompleted)

  switch (state.session.view) {
    case "completed": {
      return {
        tickets: onlyCompleted(values(state.tickets))
      }
    }
    case "queued":
    default: {
      return {
        tickets: onlyQueued(values(state.tickets))
      }
    }
  }
})
class Expo extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    tickets: PropTypes.array.isRequired
  }

  static defaultProps = {
    tickets: []
  }

  render () {
    const {
      dispatch,
      tickets
    } = this.props

    return (
      <div>
        <Header dispatch={dispatch} open={false} />
        <section style={styles.expo}>
          {renderTickets(tickets, dispatch)}
        </section>
      </div>
    )
  }
}

export default Expo
