import React, {Component} from "react";
import Radium from "radium";

@Radium
class Modal extends Component {

  render () {

    return (
      <div>
        <h1>Help!</h1>
        <p>Are you sure you want to close the kitchen?</p>
        <div>
          <button style={styles.button}>Yes</button>
          <button style={styles.button}>No</button>
        </div>
      </div>
    );
  }
};

const styles = {
  button: {}
};

export default Modal;
