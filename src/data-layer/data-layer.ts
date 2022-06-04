import { injectable } from "inversify";
import { IDataLayer } from "./data-layer.interface";

@injectable()
export class DataLayer<T extends { _id: number }> implements IDataLayer<T> {
  constructor(private readonly store: T[] = []) {}

  findOne(id: number) {
    return this.store.find(({ _id }) => _id === id) || null;
  }

  findAll<T>() {
    const data = this.store || null;
    return (data as unknown) as T;
  }

  create(payload: T) {
    this.store.push(payload);
  }

  update(id: number, payload: Partial<Omit<T, "_id">>) {
    const index = this.store.findIndex(({ _id }) => _id === id);
    this.store[index] = {
      ...this.store[index],
      ...payload
    };
  }

  remove(id: number) {
    delete this.store[id];
  }
}
