import { Module } from '@nestjs/common';
import { LiquidacionesController } from './liquidaciones.controller';
import { LiquidacionesService } from './liquidaciones.service';
import { LiquidacionesRepository } from './liquidaciones.repository';
import { PaymentModule } from 'src/payments/payment.module';

@Module({
  controllers: [LiquidacionesController],
  imports: [PaymentModule],
  providers: [LiquidacionesService, LiquidacionesRepository],
})
export class LiquidacionesModule {}
