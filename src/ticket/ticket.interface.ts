export interface ITicket {
  _id: number;
  person: {
    name: string;
    lastname: string;
  };
  price: number;
}