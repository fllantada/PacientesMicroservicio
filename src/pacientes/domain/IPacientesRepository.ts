import { Paciente } from './entities/paciente.entity';

export interface IPacientesRepository {
  findOne(dni: string): Promise<Paciente | null>;
  update(paciente: Paciente): Promise<{ msg: string; data: Paciente }>;
}
