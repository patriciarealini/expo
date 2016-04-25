import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import Radium from "radium"

import {viewCompleted, viewQueued} from "../../actions/index.js"
import Modal from "../Modal/index.jsx"

const styles = {
  header: {
    backgroundColor: "Tomato",
    border: "3px solid Firebrick"
  }
}

const onClickChangeView = (action, dispatch) => () => {
  dispatch(action())
}

const toggleView = (view, dispatch) => {
  if (view === "completed") {
    return (
      <button onClick={onClickChangeView(viewQueued, dispatch)}>View Queue</button>
    )
  }
  return (
    <button onClick={onClickChangeView(viewCompleted, dispatch)}>View Completed Tickets</button>
  )
}

@Radium
@connect((state) => {
  return {
    view: state.session.view
  }
})
class Header extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    view: PropTypes.string
  }

  render () {
    return (
      <div style={styles.header}>
        <h1>Ando!</h1>
        {toggleView(this.props.view, this.props.dispatch)}
        <Modal />
      </div>
    )
  }
}

export default Header
