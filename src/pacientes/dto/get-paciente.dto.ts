import { Pacientes } from '../schema/pacientes.schema';

export interface PacientesDto {
  total: number;
  data: Pacientes[];
  offset: number;
}
