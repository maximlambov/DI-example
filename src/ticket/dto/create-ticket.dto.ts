export interface ICreateTicketDto {
  person: {
    name: string;
    lastname: string;
  };
  price: number;
}
