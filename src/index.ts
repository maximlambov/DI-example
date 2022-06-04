import { DataLayer } from "./data-layer/data-layer";
import { Logger } from "./logger/logger";
import { Ticket } from "./ticket/ticket";
import { ITicket } from "./ticket/ticket.interface";

class TicketService {
  start() {
    const logger = new Logger();
    const dataLayer = new DataLayer<ITicket>();
    const ticket = new Ticket(logger, dataLayer);

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
