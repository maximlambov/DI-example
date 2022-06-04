import { ILogger } from "./logger.interface";

export class Logger implements ILogger {
  print(message: string) {
    console.log(message);
  }
}
