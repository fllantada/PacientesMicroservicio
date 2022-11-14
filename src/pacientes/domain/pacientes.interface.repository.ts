import { Paciente } from './entities/paciente.entity';

export interface PacientesInterfaceRepository {
  findOne(dni: string): Promise<Paciente | null>;
  update(paciente: Paciente): Promise<{ msg: string; data: Paciente }>;
}
