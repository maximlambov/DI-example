import { ILogger } from "../logger/logger.interface";
import {
  IDataLayer
} from "../data-layer/data-layer.interface";
import { ICreateTicketDto } from "./dto/create-ticket.dto";
import { IUpdateticketDto } from "./dto/update-ticket.dto";
import { ITicket } from "./ticket.interface";

export class Ticket {
  constructor(
    private readonly logger: ILogger,
    private readonly dataLayer: IDataLayer<ITicket>
  ) {}

  create(payload: ICreateTicketDto) {
    this.logger.print("add ticket");
    return this.dataLayer.create({
      _id: Date.now(),
      ...payload
    });
  }

  findAll() {
    this.logger.print("findOne ticket");
    return this.dataLayer.findAll();
  }

  findOne(id: number) {
    this.logger.print("findOne ticket");
    return this.dataLayer.findOne(id);
  }

  update(id: number, ticketUpdateDto: IUpdateticketDto) {
    this.logger.print("update ticket");
    return this.dataLayer.update(id, ticketUpdateDto);
  }

  remove(id: number) {
    this.logger.print("remove ticket");
    return this.dataLayer.remove(id);
  }
}
