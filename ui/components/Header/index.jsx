import React, {Component} from "react";

import {Modal} from "../index.jsx";

class Header extends Component {

  render () {

    return (
      <div class="header-content">
        <h1>Ando!</h1>
        <Modal />
      </div>
    );
  }
};

export default Header;
