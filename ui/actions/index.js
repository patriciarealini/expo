export function getAllTickets () {

  return {
    type: "RECEIVE_TICKETS",
    tickets: {
      1: {
        completed: true,
        courierETA: new Date(),
        courierName: "Courier 1",
        customerAddress: "Customer Address 1",
        customerName: "Customer Name 1",
        orderNumber: 1
      },
      2: {
        courierETA: new Date(),
        courierName: "Courier 2",
        customerAddress: "Customer Address 2",
        customerName: "Customer Name 2",
        orderNumber: 2
      },
      3: {
        courierETA: new Date(),
        courierName: "Courier 3",
        customerAddress: "Customer Address 3",
        customerName: "Customer Name 3",
        orderNumber: 3
      },
      4: {
        courierETA: new Date(),
        courierName: "Courier 4",
        customerAddress: "Customer Address 4",
        customerName: "Customer Name 4",
        orderNumber: 4
      }
    }
  }
}
