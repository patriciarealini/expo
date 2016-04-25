import {combineReducers} from "redux"

const initalState = {}

function tickets (state = initalState, action) {
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
    default: {
      return state
    }
  }
}
function session (state = initalState, action) {
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

export default combineReducers({
  tickets,
  session
})
