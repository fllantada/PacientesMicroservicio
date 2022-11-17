import { ILiquidacionesRepository } from './domain/ILiquidaciones.repository';
import { Sede } from './domain/entities/Sede';
import { Injectable } from '@nestjs/common';
import { PagosService } from 'src/pagos/pagos.service';

@Injectable()
export class LiquidacionesRepository implements ILiquidacionesRepository {
  fechaInicio: string = '';
  fechaFin: string = '';
  constructor(private Pagoservice: PagosService) {
    console.log(Pagoservice);
  }
  getSedes(): Promise<Sede[]> {
    throw new Error('Method not implemented');
  }
  getPagosSemanales(): Promise<any[]> {
    throw new Error('Method not implemented');
  }
  getLiquidacionesSemanales(): Promise<any[]> {
    throw new Error('Method not implemented');
  }
}
