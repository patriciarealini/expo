import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import Radium from "radium"

import {closeKitchen, closeModal} from "../../actions/index.js"

const styles = {
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    background: "rgba(93,93,93, 0.7)",
    zIndex: 100
  },
  overlay: {
    background: "#FFFFFF",
    width: "60%",
    height: "50%"
  },
  modalHeader: {
    color: "#F7717D",
    textAlign: "center",
    margin: "50px 0 20px 0"
  },
  modalContent: {
    textAlign: "center",
    margin: "40px 0"
  },
  selection: {
    display: "flex",
    justifyContent: "space-around",
    width: "60%",
    margin: "0 auto"
  },
  modalButton: {
    color: "#FFFFFF",
    width: 90,
    height: 60,
    margin: "5px 5px 5px 0"
  }
}

const onClickChangeView = (action, dispatch) => () => {
  dispatch(action())
}
const onClickCloseKitchen = (dispatch) => () => {
  dispatch(closeKitchen())
  dispatch(closeModal())
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
          <div style={styles.overlay}>
            <h1 style={styles.modalHeader}>Help!</h1>
            <p style={styles.modalContent}>Are you sure you want to close the kitchen?</p>
            <div style={styles.selection}>
              <button onClick={onClickCloseKitchen(this.props.dispatch)} style={styles.modalButton}>Yes</button>
              <button onClick={onClickChangeView(closeModal, this.props.dispatch)} style={styles.modalButton}>No</button>
            </div>
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
