import { Module } from '@nestjs/common';
import { LiquidacionesController } from './liquidaciones.controller';
import { LiquidacionesService } from './liquidaciones.service';
import { LiquidacionesRepository } from './liquidaciones.repository';

@Module({
  controllers: [LiquidacionesController],
  providers: [LiquidacionesService, LiquidacionesRepository],
})
export class LiquidacionesModule {}
