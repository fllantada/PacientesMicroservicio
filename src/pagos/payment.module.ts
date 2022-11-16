import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PagosController } from './payment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Payment, PaymentSchema } from './schemas/payment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }]),
  ],
  controllers: [PagosController],
  providers: [PaymentService],
})
export class PaymentModule {}
