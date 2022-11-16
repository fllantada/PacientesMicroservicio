import { Payment } from './payment.entity';
import { FilterQuery } from 'mongoose';

export interface IPaymentRepository {
  find({}): Promise<Payment[]>;
  /*   findById(id: string): Promise<Payment>;
  create(payment: Payment): Promise<Payment>;
  update(id: string, payment: Payment): Promise<Payment>;
  delete(id: string): Promise<Payment>; */
}
