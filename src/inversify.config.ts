import { Container } from "inversify";
import "reflect-metadata";
import { DataLayer } from "./data-layer/data-layer";
import { Logger } from "./logger/logger";
import { Ticket } from "./ticket/ticket";
import { TYPES } from "./types";

export const container = new Container();

container.bind<Logger>(TYPES.Logger).to(Logger);
container.bind<DataLayer<any>>(TYPES.DataLayer).to(DataLayer);
container.bind<Ticket>(TYPES.Ticket).to(Ticket);
