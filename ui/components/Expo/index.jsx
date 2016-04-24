import React, {Component} from "react"
import Radium from "radium"

import Ticket from "../Ticket/index.jsx"

@Radium
class Expo extends Component {

  renderTicket () {

    return (
      <Ticket
        courierETA={new Date()}
        courierName={"Mr. Messenger Bag"}
        customerAddress={"123 Prince St., New York, NY 10001"}
        customerName={"Prince"}
        orderNumber={1} />
    )
  }

  render () {

    return (
      <div>
        <section style={styles.expo}>
          {this.renderTicket()}
        </section>
      </div>
    )
  }
}

const styles = {
  expo: {

  }
}

export default Expo
