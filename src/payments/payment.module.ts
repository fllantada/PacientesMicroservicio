import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PagosController } from './payment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Payment, PaymentSchema } from './schemas/payment.schema';
import { PaymentRepository } from './payment.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'pagos', schema: PaymentSchema }]),
  ],
  controllers: [PagosController],
  providers: [PaymentService, PaymentRepository],
  exports: [PaymentService],
})
export class PaymentModule {}
