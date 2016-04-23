import React, {Component} from "react";

class Modal extends Component {

  render () {

    return (
      <div>
        <h1>Help!</h1>
        <p>Are you sure you want to close the kitchen?</p>
        <div>
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
    );
  }
};

export default Modal;
