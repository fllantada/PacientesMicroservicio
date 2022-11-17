import { Module } from '@nestjs/common';
import { LiquidacionesController } from './liquidaciones.controller';
import { LiquidacionesService } from './liquidaciones.service';
import { LiquidacionesRepository } from './liquidaciones.repository';
import { PagosModule } from 'src/pagos/pagos.module';
import { SedesModule } from 'src/sedes/sedes.module';

@Module({
  controllers: [LiquidacionesController],
  imports: [PagosModule, SedesModule],
  providers: [LiquidacionesService, LiquidacionesRepository],
})
export class LiquidacionesModule {}
