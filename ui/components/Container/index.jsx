import React, {Component} from "react";
import Radium from "radium";

import {Tickets} from "../index.jsx";

@Radium
class Container extends Component {

  render () {

    return (
      <div>
        <section style={styles.orderContainer}>
        <Tickets />
        </section>
      </div>
    );
  }
};

const styles = {
  orderContainer: {
    
  }
};

export default Container;
