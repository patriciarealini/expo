import React, {Component} from "react";

import {Tickets} from "../index.jsx";

class Container extends Component {

  render () {

    return (
      <div>
        <section class="order-styles">
        <Tickets />
        </section>
      </div>
    );
  }
};

export default Container;
