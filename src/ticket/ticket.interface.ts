export interface ITicket<T> {
  create(payload: T): void;
  findOne(key: number): T | null;
  findAll(): T[];
  update(key: number, payload: Partial<Omit<T, '_id'>>): void;
  remove(key: number): void;
}