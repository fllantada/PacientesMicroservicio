import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { Paciente } from './domain/entities/paciente.entity';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('Editar Pacientes')
@Controller('pacientes')
export class PacientesController {
  constructor(private readonly pacientesService: PacientesService) {}

  @Get(':dni')
  findOne(@Param('dni') dni: string) {
    return this.pacientesService.findOne(dni);
  }

  @Patch(':dni')
  update(@Param('dni') dni: string, @Body() newPaciente: Paciente) {
    return this.pacientesService.update(newPaciente);
  }
}
