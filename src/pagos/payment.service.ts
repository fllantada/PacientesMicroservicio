import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {
  findAll() {
    return `This action returns all pagos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pago`;
  }

  remove(id: number) {
    return `This action removes a #${id} pago`;
  }
}
