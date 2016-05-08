import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import {filter, values, whereEq} from "ramda"
import Radium from "radium"

import Ticket from "../Ticket/index.jsx"
import Header from "../Header/index.jsx"
import Modal from "../Modal/index.jsx"

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
      orderNumber={ticket.orderNumber}
      updatedAt={ticket.updatedAt} />
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
    open: PropTypes.bool.isRequired,
    tickets: PropTypes.array.isRequired
  }

  static defaultProps = {
    open: false,
    tickets: []
  }

  render () {
    const {
      dispatch,
      open,
      tickets
    } = this.props

    return (
      <div>
        <Modal dispatch={dispatch} open={open} />
        <Header dispatch={dispatch} open={open} />
        <section style={styles.expo}>
          {renderTickets(tickets, dispatch)}
        </section>
      </div>
    )
  }
}

export default Expo
