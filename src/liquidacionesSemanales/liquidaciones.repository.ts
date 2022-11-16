import { ILiquidacionesRepository } from './domain/ILiquidaciones.repository';
import { Sede } from './domain/entities/Sede';
import { Injectable } from '@nestjs/common';
import { PaymentService } from 'src/payments/payment.service';

@Injectable()
export class LiquidacionesRepository implements ILiquidacionesRepository {
  fechaInicio: string = '';
  fechaFin: string = '';
  constructor(private PaymentService: PaymentService) {
    console.log(PaymentService);
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
