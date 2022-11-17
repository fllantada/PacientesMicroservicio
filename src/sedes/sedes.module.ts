import { Module } from '@nestjs/common';
import { SedesService } from './sedes.service';
import { SedesController } from './sedes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SedesRepository } from './sedes.repository';
import { Sede, sedeSchema } from './schemas/sede.schema';
import { DentistasModule } from 'src/dentistas/dentistas.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sede.name, schema: sedeSchema }]),
    DentistasModule,
  ],
  controllers: [SedesController],
  providers: [SedesService, SedesRepository],
  exports: [SedesService],
})
export class SedesModule {}
