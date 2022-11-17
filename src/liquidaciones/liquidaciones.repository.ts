import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Liquidacion as liquidacionSchema,
  liquidacionDocument,
} from './schemas/liquidacion.schema';
import { FilterQuery } from 'mongoose';
import { Liquidacion as liquidacionEntity } from './entities/liquidacion.entity';
import { ILiquidacionesRepository } from './entities/ILiquidaciones.repository';

@Injectable()
export class LiquidacionesRepository implements ILiquidacionesRepository {
  constructor(
    @InjectModel('liquidacione')
    private liquidacionModel: Model<liquidacionDocument>,
  ) {}

  async find(
    query: FilterQuery<liquidacionSchema>,
  ): Promise<liquidacionEntity[]> {
    console.log('ENtre a repository');
    const liquidaciones = await this.liquidacionModel.find({}).limit(100);
    console.log('liquidaciones', liquidaciones[0]);
    return liquidaciones;
  }
}
