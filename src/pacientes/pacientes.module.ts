import { Module } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { PacientesController } from './pacientes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pacientes, PacientesSchema } from './schema/pacientes.schema';
import { PacientesRepository } from './pacientes.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Pacientes.name, schema: PacientesSchema },
    ]),
  ],
  controllers: [PacientesController],
  providers: [PacientesService, PacientesRepository],
})
export class PacientesModule {}
