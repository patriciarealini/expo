import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {createStore} from "redux"

import {getAllTickets} from "./actions/index.js"
import reducers from "./reducers/index.js"
import {Header, Expo} from "./components/index.jsx"

const store = createStore(reducers)

store.dispatch(getAllTickets())

ReactDOM.render(
  <div>
    <Header />
    <Provider store={store}>
      <Expo />
    </Provider>
  </div>,
  document.getElementById("ando")
)
