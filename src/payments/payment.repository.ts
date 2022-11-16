import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';
import { Payment, PaymentDocument } from './schemas/payment.schema';
import { IPaymentRepository } from './entities/IPayment.repository';
import { Payment as PaymentEntity } from './entities/payment.entity';

Injectable();
export class PaymentRepository implements IPaymentRepository {
  constructor(
    @InjectModel('pagos') private paymentModel: Model<PaymentDocument>,
  ) {}

  async find(query: FilterQuery<Payment>): Promise<PaymentEntity[]> {
    console.log('Desde repository find all');
    const payments = (await this.paymentModel
      .find(query)
      .limit(500)) as Payment[];
    console.log(payments);
    return this.mapPayments(payments);
  }
  mapPayments(payments: Payment[]): PaymentEntity[] {
    const paymentEntities: PaymentEntity[] = payments.map((payment) => {
      return {
        id_sucursal: parseInt(payment.id_sucursal),
        medio_pago: payment.medio_pago,
        monto: payment.monto_pago,
      };
    });
    console.log(paymentEntities);

    return paymentEntities;
  }
  findById() {}
  create() {}
  update() {}
  delete() {}
}
