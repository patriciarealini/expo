import React, {Component} from "react";
import Radium from "radium";

import {Modal} from "../index.jsx";

@Radium
class Header extends Component {

  render () {

    return (
      <div style={styles.header}>
        <h1>Ando!</h1>
        <Modal />
      </div>
    );
  }
};

const styles = {
  header: {
    backgroundColor: "Tomato",
    border: "3px solid Firebrick"
  }
};

export default Header;
