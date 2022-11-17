import { Module } from '@nestjs/common';
import { DentistasService } from './dentistas.service';
import { DentistasController } from './dentistas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DentistasRepository } from './dentistas.repository';

import { Dentista, dentistaSchema } from './schemas/dentista.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Dentista.name, schema: dentistaSchema },
    ]),
  ],
  controllers: [DentistasController],
  providers: [DentistasService, DentistasRepository],
  exports: [DentistasService],
})
export class DentistasModule {}
