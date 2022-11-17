import { Pago } from './pago.entity';

export interface IPagosRepository {
  find({}): Promise<Pago[]>;
  /*   findById(id: string): Promise<pago>;
  create(pago: pago): Promise<pago>;
  update(id: string, pago: pago): Promise<pago>;
  delete(id: string): Promise<pago>; */
}
