import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import Radium from "radium"

import {viewCompleted, viewQueued, openModal} from "../../actions/index.js"

const styles = {
  header: {
    position: "fixed",
    width: "100vw",
    height: 125,
    display: "flex",
    alignItems: "center",
    zIndex: 0
  },
  heading: {
    flex: 1,
    height: 115,
    margin: "5px",
    background: "#F7717D",
    display: "flex",
    jusitfyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "10px"
  },
  button: {
    color: "#FFFFFF",
    width: 115,
    height: 115,
    margin: "5px 5px 5px 0"
  }
}

const onClickChangeView = (action, dispatch) => () => {
  dispatch(action())
}

const toggleView = (view, dispatch) => {
  if (view === "completed") {
    return (
      <button onClick={onClickChangeView(viewQueued, dispatch)} style={styles.button}>
        View Queue
      </button>
    )
  }
  return (
    <button onClick={onClickChangeView(viewCompleted, dispatch)} style={styles.button}>
      View Completed Tickets
    </button>
  )
}

@Radium
@connect((state) => {
  switch (state.help.open) {
    case "true": {
      return {
        open: state.help.open === true,
        view: state.session.view
      }
    }
    case "false":
    default: {
      return {
        open: state.help.open === false,
        view: state.session.view
      }
    }
  }
})
class Header extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    view: PropTypes.string
  }

  render () {
    const {
      dispatch,
      view
    } = this.props

    return (
      <div style={styles.header}>
        <h1 style={styles.heading}>Expo</h1>
        {toggleView(view, dispatch)}
        <button onClick={onClickChangeView(openModal, dispatch)} style={styles.button}>
          Help!
        </button>
      </div>
    )
  }
}

export default Header
