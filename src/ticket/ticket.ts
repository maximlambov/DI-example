import { ILogger } from "../logger/logger.interface";
import { ICreateTicketDto } from "./dto/create-ticket.dto";
import { IUpdateticketDto } from "./dto/update-ticket.dto";
import { ITicket } from "./ticket.interface";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";

@injectable()
export class Ticket implements ITicket<any> {
  constructor(
    @inject(TYPES.Logger) private readonly logger: ILogger,
    @inject(TYPES.DataLayer) private readonly dataLayer: any
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
