import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {applyMiddleware, createStore} from "redux"
import createLogger from "redux-logger"
import thunk from 'redux-thunk'

import {getAllTickets, fetchTicket} from "./actions/index.js"
import reducers from "./reducers/index.js"
import {Expo} from "./components/index.jsx"

const logger = createLogger()
const store = createStore(reducers, applyMiddleware(thunk, logger))

store.dispatch(getAllTickets())
// store.dispatch(newTicket())
setInterval(() => store.dispatch(fetchTicket()), 15000)

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Expo dispatch={store.dispatch}/>
    </Provider>
  </div>,
  document.getElementById("ando")
)
