import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Sede as sedeSchema, sedeDocument } from './schemas/sede.schema';
import { Model, FilterQuery } from 'mongoose';
import { ISedesRepository } from './entities/ISedes.repository';
import { Sede as sedeEntity } from './entities/sede.entity';

@Injectable()
export class SedesRepository implements ISedesRepository {
  constructor(
    @InjectModel(sedeSchema.name) private sedeModel: Model<sedeDocument>,
  ) {}

  async findAll(filter: FilterQuery<sedeSchema>): Promise<sedeEntity[]> {
    const sedes = await this.sedeModel.find();
    return this.mapSedes(sedes);
  }
  mapSedes(sedes: sedeSchema[]): sedeEntity[] {
    const sedeEntities = sedes.map((sede) => {
      return {
        id_dentalink: sede.id_dentalink as number,
        name: sede.name as string,
        direccion: sede.direccion as string,

        dentistas: this.getDentistas(sede.id_dentalink),
      };
    });

    return sedeEntities;
  }

  getDentistas(id_dentalink): [{ id_dentalink: number; name: string }] {
    console.log('dentistas es: ', id_dentalink);
    return [
      {
        id_dentalink: 1,
        name: 'Juan Perez',
      },
    ];
  }
}
