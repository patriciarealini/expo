export function getAllTickets () {
  return {
    type: "RECEIVE_TICKETS",
    tickets: {
      1: {
        completed: false,
        courierETA: new Date(),
        courierName: "Ruth Reichl",
        customerAddress: "80 Spring St., New York, NY 10012",
        customerName: "Keith McNally",
        orderNumber: 1
      },
      2: {
        completed: false,
        courierETA: new Date(),
        courierName: "Pete Wells",
        customerAddress: "171 East Broadway, New York, NY 10002",
        customerName: "Danny Bowien",
        orderNumber: 2
      },
      3: {
        completed: false,
        courierETA: new Date(),
        courierName: "John L. Hess",
        customerAddress: "11 Madison Ave., New York, NY 10010",
        customerName: "Daniel Humm",
        orderNumber: 3
      },
      4: {
        completed: false,
        courierETA: new Date(),
        courierName: "Bryan Miller",
        customerAddress: "10 Columbus Cir., New York, NY 10019",
        customerName: "Thomas Keller",
        orderNumber: 4
      },
      5: {
        completed: false,
        courierETA: new Date(),
        courierName: "Peter Meehan",
        customerAddress: "175 Avenue B, New York, NY 10009",
        customerName: "Ruth Krishna",
        orderNumber: 5
      },
      6: {
        completed: false,
        courierETA: new Date(),
        courierName: "Craig Claiborne",
        customerAddress: "179 E Houston St., New York, NY 10002",
        customerName: "Joel Russ",
        orderNumber: 6
      },
      7: {
        completed: false,
        courierETA: new Date(),
        courierName: "Frank Bruni",
        customerAddress: "54 East 1st St., New York, NY 10003",
        customerName: "Gabrielle Hamilton",
        orderNumber: 7
      },
      8: {
        completed: false,
        courierETA: new Date(),
        courierName: "Mimi Sheraton",
        customerAddress: "60 E 65th St., New York, NY 10065",
        customerName: "Daniel Boulud",
        orderNumber: 8
      },
      9: {
        completed: false,
        courierETA: new Date(),
        courierName: "William Grimes",
        customerAddress: "43 E 19th St., New York, NY 10003",
        customerName: "Tom Colicchio",
        orderNumber: 9
      },
      10: {
        completed: false,
        courierETA: new Date(),
        courierName: "Sam Sifton",
        customerAddress: "382 Metropolitan Ave., Brooklyn, NY 11211",
        customerName: "Christina Tosi",
        orderNumber: 10
      }
    }
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
