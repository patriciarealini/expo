import React, {Component} from "react";

export default class Modal extends Component {

  render () {

    return (
      <div class="modal-content">
        <h1>Help!</h1>
        <p>Are you sure you want to close the kitchen?</p>
        <div class="buttons">
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
    );
  }
};
