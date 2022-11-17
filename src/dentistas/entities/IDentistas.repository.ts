import { Dentista } from './dentista.entity';
export interface IDentistasRepository {
  getAll(): Promise<Dentista[]>;
}
