import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';
import { IDentistasRepository } from './entities/IDentistas.repository';

import { Dentista as dentistaEntity } from './entities/dentista.entity';
import {
  Dentista as dentistaSchema,
  dentistaDocument,
} from './schemas/dentista.schema';

@Injectable()
export class DentistasRepository implements IDentistasRepository {
  constructor(
    @InjectModel(dentistaSchema.name)
    private dentistaModel: Model<dentistaDocument>,
  ) {}

  async getAll(): Promise<dentistaEntity[]> {
    const dentistas = await this.dentistaModel.find();
    return this.mapDentistas(dentistas);
  }

  mapDentistas(dentistas: dentistaSchema[]): dentistaEntity[] {
    const dentistaEntities = dentistas.map((dentista) => {
      return {
        id_dentista: dentista.id_dentista as number,
        name: dentista.name as string,
        especialidad: dentista?.especialidad as string,
        sedes: dentista.contratos_sucursal as number[],
      };
    });
    return dentistaEntities;
  }
}
