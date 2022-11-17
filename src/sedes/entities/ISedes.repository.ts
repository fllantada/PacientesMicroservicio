import { Sede } from './sede.entity';
export interface ISedesRepository {
  findAll({}): Promise<Sede[]>;
}
