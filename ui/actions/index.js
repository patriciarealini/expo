import {keys} from "ramda"
import {name, address, date} from "faker"
import moment from "moment"

const randomMinutes = () => Math.floor(Math.random() * 30 + 1)
const newETA = () => date.between(new Date(), moment().add(randomMinutes(), "m"))

export function getAllTickets () {
  return {
    type: "RECEIVE_TICKETS",
    tickets: {
      1: {
        completed: false,
        courierETA: newETA(),
        courierName: "Ruth Reichl",
        customerAddress: "80 Spring St., New York, NY 10012",
        customerName: "Keith McNally",
        orderNumber: 1,
        updatedAt: new Date()
      },
      2: {
        completed: false,
        courierETA: newETA(),
        courierName: "Pete Wells",
        customerAddress: "171 East Broadway, New York, NY 10002",
        customerName: "Danny Bowien",
        orderNumber: 2,
        updatedAt: new Date()
      },
      3: {
        completed: false,
        courierETA: newETA(),
        courierName: "Bryan Miller",
        customerAddress: "10 Columbus Cir., New York, NY 10019",
        customerName: "Thomas Keller",
        orderNumber: 3,
        updatedAt: new Date()
      },
      4: {
        completed: false,
        courierETA: newETA(),
        courierName: "Craig Claiborne",
        customerAddress: "179 E Houston St., New York, NY 10002",
        customerName: "Joel Russ",
        orderNumber: 4,
        updatedAt: new Date()
      },
      5: {
        completed: false,
        courierETA: newETA(),
        courierName: "Peter Meehan",
        customerAddress: "175 Avenue B, New York, NY 10009",
        customerName: "Ruth Krishna",
        orderNumber: 5,
        updatedAt: new Date()
      },
      6: {
        completed: false,
        courierETA: newETA(),
        courierName: "John L. Hess",
        customerAddress: "11 Madison Ave., New York, NY 10010",
        customerName: "Daniel Humm",
        orderNumber: 6,
        updatedAt: new Date()
      },
      7: {
        completed: false,
        courierETA: newETA(),
        courierName: "Frank Bruni",
        customerAddress: "54 East 1st St., New York, NY 10003",
        customerName: "Gabrielle Hamilton",
        orderNumber: 7,
        updatedAt: new Date()
      },
      8: {
        completed: false,
        courierETA: newETA(),
        courierName: "Mimi Sheraton",
        customerAddress: "60 E 65th St., New York, NY 10065",
        customerName: "Daniel Boulud",
        orderNumber: 8,
        updatedAt: new Date()
      },
      9: {
        completed: false,
        courierETA: newETA(),
        courierName: "William Grimes",
        customerAddress: "43 E 19th St., New York, NY 10003",
        customerName: "Tom Colicchio",
        orderNumber: 9,
        updatedAt: new Date()
      },
      10: {
        completed: false,
        courierETA: newETA(),
        courierName: "Sam Sifton",
        customerAddress: "382 Metropolitan Ave., Brooklyn, NY 11211",
        customerName: "Christina Tosi",
        orderNumber: 10,
        updatedAt: new Date()
      }
    }
  }
}
export function newTicket (ticket) {
  return {
    type: "NEW_TICKET",
    ticket
  }
}
export function noTicket () {
  return {
    type: "NO_TICKET"
  }
}
export function fetchTicket () {
  return (dispatch, getState) => {
    if (getState().session.off) {
      return dispatch(noTicket())
    }
    const id = keys(getState().tickets).length + 1

    const ticket = {
      completed: false,
      courierETA: newETA(),
      courierName: name.findName(),
      customerAddress: `${address.streetAddress()}, New York, NY 10002`,
      customerName: name.findName(),
      orderNumber: id,
      updatedAt: new Date()
    }

    return dispatch(newTicket(ticket))
  }
}
export function markTicketCompleted (id) {
  return {
    type: "MARK_TICKET_COMPLETED",
    id
  }
}
export function viewCompleted () {
  return {
    type: "VIEW_COMPLETED"
  }
}
export function viewQueued () {
  return {
    type: "VIEW_QUEUED"
  }
}
export function openModal () {
  return {
    type: "OPEN_MODAL"
  }
}
export function closeModal () {
  return {
    type: "CLOSE_MODAL"
  }
}
export function closeKitchen () {
  return {
    type: "CLOSE_KITCHEN"
  }
}
