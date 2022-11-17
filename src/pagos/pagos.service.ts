import { Injectable } from '@nestjs/common';
import { PagosRepository } from './pagos.repository';

@Injectable()
export class PagosService {
  constructor(private repository: PagosRepository) {}

  findAll() {
    console.log('Find all desde service');
    return this.repository.find({});
  }
  getPagosBetweenDates(startDate: Date, endDate: Date) {
    return this.repository.find({
      fecha_recepcion: { $gte: startDate, $lte: endDate },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} pago`;
  }

  remove(id: number) {
    return `This action removes a #${id} pago`;
  }
}
