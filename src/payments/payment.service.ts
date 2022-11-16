import { Injectable } from '@nestjs/common';
import { PaymentRepository } from './payment.repository';

@Injectable()
export class PaymentService {
  constructor(private repository: PaymentRepository) {}

  findAll() {
    console.log('Find all desde service');
    return this.repository.find({});
  }
  getPaymentsBetweenDates(startDate: Date, endDate: Date) {
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
