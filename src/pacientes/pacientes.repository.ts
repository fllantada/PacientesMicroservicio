import { Injectable } from '@nestjs/common';
import { Paciente } from './entities/paciente.entity';
import { Pacientes } from './schema/pacientes.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class PacientesRepository {
  constructor(
    @InjectModel(Pacientes.name) private pacientesModel: Model<Pacientes>,
  ) {}

  async findOne(dni: string): Promise<Paciente | null> {
    const paciente: Paciente = await this.pacientesModel.findOne({ dni: dni });

    return paciente || null;
  }

  async update(paciente: Paciente): Promise<{ msg: string; data: Paciente }> {
    console.log('Ingrese en update Paciente');
    const pacienteViejo = await this.pacientesModel.findOne({
      dni: paciente.dni,
    });

    pacienteViejo.direccion = paciente.direccion || pacienteViejo.direccion;
    pacienteViejo.telefono = paciente.telefono || pacienteViejo.telefono;
    pacienteViejo.email = paciente.email || pacienteViejo.email;
    pacienteViejo.celular = paciente.celular || pacienteViejo.celular;

    pacienteViejo.save();
    return { msg: 'Paciente actualizado', data: pacienteViejo.toObject() };
  }
}
