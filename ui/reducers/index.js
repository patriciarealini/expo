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
    default: {
      return state
    }
  }
}

export default combineReducers({
  tickets
})
