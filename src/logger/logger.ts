import { injectable } from "inversify";
import { ILogger } from "./logger.interface";

@injectable()
export class Logger implements ILogger {
  print(message: string) {
    console.log(message);
  }
}
