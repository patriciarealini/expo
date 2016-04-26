import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import Radium from "radium"

import {closeModal} from "../../actions/index.js"

const styles = {
  modal: {
    display: "block",
    position: "absolute",
    width: "100vw",
    height: "100vh",
    background: "#5d5d5d"
  },
  selection: {
    display: "flex",
    jusitfyContent: "center"
  },
  modalButton: {
    flex: 1
  }
}

const onClickChangeView = (action, dispatch) => () => {
  dispatch(action())
}

@Radium
@connect((state) => {
  switch (state.help.open) {
    case "false": {
      return {
        open: state.help.open === false
      }
    }
    case "true":
    default: {
      return {
        open: state.help.open === true
      }
    }
  }
})
class Modal extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
  }

  renderModal (open) {
    if (open) {
      return (
        <div style={styles.modal}>
          <h1>Help!</h1>
          <p>Are you sure you want to close the kitchen?</p>
          <div style={styles.selection}>
            <button style={styles.button}>Yes</button>
            <button onClick={onClickChangeView(closeModal, this.props.dispatch)} style={styles.button}>No</button>
          </div>
        </div>
      )
    } return null
  }

  render () {
    return this.renderModal(this.props.open)
  }
}

export default Modal
