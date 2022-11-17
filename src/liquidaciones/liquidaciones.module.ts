import { Module } from '@nestjs/common';
import { LiquidacionesService } from './liquidaciones.service';
import { LiquidacionesController } from './liquidaciones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { liquidacionSchema, Liquidacion } from './schemas/liquidacion.schema';
import { LiquidacionesRepository } from './liquidaciones.repository';
import { DatesModule } from 'src/utils/dates/dates.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'liquidacione', schema: liquidacionSchema },
    ]),
    DatesModule,
  ],
  controllers: [LiquidacionesController],
  providers: [LiquidacionesService, LiquidacionesRepository],
})
export class LiquidacionesModule {}
