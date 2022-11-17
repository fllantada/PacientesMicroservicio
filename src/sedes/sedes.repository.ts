import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Sede as sedeSchema, sedeDocument } from './schemas/sede.schema';
import { Model, FilterQuery } from 'mongoose';
import { ISedesRepository } from './entities/ISedes.repository';
import { Sede as sedeEntity } from './entities/sede.entity';
import { DentistasService } from 'src/dentistas/dentistas.service';
import { Dentista } from 'src/dentistas/entities/dentista.entity';
type DentistaSede = {
  id_dentista: number;
  name: string;
};

@Injectable()
export class SedesRepository implements ISedesRepository {
  private dentistas: Dentista[] = [];
  private sedes: sedeEntity[] = [];
  private resetCount = 0;

  constructor(
    @InjectModel(sedeSchema.name) private sedeModel: Model<sedeDocument>,
    private dentistasService: DentistasService,
  ) {}

  async findAll(filter: FilterQuery<sedeSchema>): Promise<sedeEntity[]> {
    //use cache
    if (this.sedes.length && this.resetCount < 10) {
      this.resetCount += 1;
      return this.sedes;
    }
    //get newData
    const sedes = await this.sedeModel.find();
    this.dentistas = await this.dentistasService.findAll();
    this.resetCount = 0;
    this.sedes = this.mapSedes(sedes);
    return this.sedes;
  }

  mapSedes(sedes: sedeSchema[]): sedeEntity[] {
    const sedeEntities = sedes.map((sede) => {
      return {
        id_sede: sede.id_dentalink as number,
        name: sede.name as string,
        direccion: sede.direccion as string,
        dentistas: this.addDentistas(sede.id_dentalink),
      };
    });

    return sedeEntities;
  }

  addDentistas(id_sede: number): DentistaSede[] {
    const dentista = this.dentistas.filter((dentista) => {
      return dentista.sedes.includes(id_sede);
    });

    const dentista2 = dentista.map((dentista) => {
      return {
        id_dentista: dentista.id_dentista,
        name: dentista.name,
      };
    });
    return dentista2;
  }
}
