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
    const liquidaciones = await this.liquidacionModel.find(query).limit(1000);
    return this.mapLiquidaciones(liquidaciones);

    /*   const liquidacion = liquidaciones[0]
      .toObject()
      .fecha_termino.toISOString()
      .slice(0, 10);
    console.log('_Transformado en fecha String:', liquidacion);

    console.log(
      'sin transformar en fecha como lo lee:',
      typeof liquidaciones[0].toObject().fecha_termino,
    );

    const date2: Date = liquidaciones[0].toObject().fecha_termino;

    console.log('a ver q pasa con date2', date2, typeof date2);

    return liquidaciones; */
  }
  mapLiquidaciones(liquidaciones: liquidacionDocument[]): liquidacionEntity[] {
    const mapedLiquidaciones: liquidacionEntity[] = liquidaciones.map(
      (liquidacion: liquidacionDocument) => {
        return {
          id_liquidacion: liquidacion.id_dentalink,
          id_sucursal: liquidacion.id_sucursal,
          id_dentista: liquidacion.id_dentista,
          fecha_inicio: liquidacion.fecha_inicio,
          fecha_fin: liquidacion.fecha_termino,
          monto: liquidacion.monto,
          link_detalle: liquidacion.link_detalle,
        };
      },
    );
    console.log('mapedLiquidaciones', mapedLiquidaciones);
    return mapedLiquidaciones;
  }
}
