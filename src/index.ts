import { container } from "./inversify.config";
import { ITicket } from "./ticket/ticket.interface";
import { TYPES } from "./types";

class TicketService {
  start() {
    const ticket = container.get<ITicket<any>>(TYPES.Ticket);

    ticket.create({
      person: {
        name: "John",
        lastname: "Doe"
      },
      price: 100
    });

    const tickets = ticket.findAll();
    console.log("tickets",tickets);
    
  }
}

const ticketService = new TicketService();

ticketService.start();
