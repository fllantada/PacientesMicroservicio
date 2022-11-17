import { Module } from '@nestjs/common';
import { LiquidacionesController } from './liquidaciones.controller';
import { LiquidacionesService } from './liquidaciones.service';
import { LiquidacionesRepository } from './liquidaciones.repository';
import { PagosModule } from 'src/pagos/pagos.module';

@Module({
  controllers: [LiquidacionesController],
  imports: [PagosModule],
  providers: [LiquidacionesService, LiquidacionesRepository],
})
export class LiquidacionesModule {}
