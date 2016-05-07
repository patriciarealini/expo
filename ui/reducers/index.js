import {combineReducers} from "redux"
import {keys} from "ramda"
import {name, address, date} from "faker"
import moment from "moment"

const initialState = {}
const randomMinutes = () => Math.floor(Math.random() * 59 + 1)

function tickets (state = initialState, action) {
  switch (action.type) {
    case "RECEIVE_TICKETS": {
      return {
        ...state,
        ...action.tickets
      }
    }
    case "MARK_TICKET_COMPLETED": {
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          completed: true
        }
      }
    }
    case "NEW_TICKET": {
      const id = keys(tickets).length + 1

      return {
        ...state,
        [id]: {
          completed: false,
          courierETA: date.between(new Date(), moment().add(randomMinutes(), "minutes")),
          courierName: name.findName(),
          customerAddress: address.streetAddress(),
          customerName: name.findName(),
          orderNumber: id
        }
      }
    }
    default: {
      return state
    }
  }
}
function session (state = initialState, action) {
  switch (action.type) {
    case "VIEW_COMPLETED": {
      return {
        ...state,
        view: "completed"
      }
    }
    case "VIEW_QUEUED": {
      return {
        ...state,
        view: "queued"
      }
    }
    default: {
      return state
    }
  }
}
function help (state = initialState, action) {
  switch (action.type) {
    case "OPEN_MODAL": {
      return {
        ...state,
        open: true
      }
    }
    case "CLOSE_MODAL": {
      return {
        ...state,
        open: false
      }
    }
    default: {
      return state
    }
  }
}

export default combineReducers({
  help,
  tickets,
  session
})
