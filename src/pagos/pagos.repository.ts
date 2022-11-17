import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';

import { Pago as pagoSchema, pagoDocument } from './schemas/pago.schema';
import { IPagosRepository } from './entities/IPagos.repository';
import { Pago as pagoEntity } from './entities/pago.entity';

Injectable();
export class PagosRepository implements IPagosRepository {
  constructor(
    @InjectModel(pagoSchema.name) private pagoModel: Model<pagoDocument>,
  ) {}

  async find(query: FilterQuery<pagoSchema>): Promise<pagoEntity[]> {
    const Pagos = await this.pagoModel.find(query);
    return this.mapPagos(Pagos);
  }
  mapPagos(Pagos: pagoSchema[]): pagoEntity[] {
    const pagoEntities: pagoEntity[] = Pagos.map((pago) => {
      return {
        id_sucursal: parseInt(pago.id_sucursal),
        medio_pago: pago.medio_pago,
        monto: pago.monto_pago,
        id_pago_dentalink: pago.id_pago_dentalink,
      };
    });
    return pagoEntities;
  }
  findById() {}
  create() {}
  update() {}
  delete() {}
}
