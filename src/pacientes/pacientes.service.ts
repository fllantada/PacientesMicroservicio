import { Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Pacientes } from './schema/pacientes.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PacientesDto } from './dto/get-paciente.dto';

@Injectable()
export class PacientesService {
  constructor(
    @InjectModel(Pacientes.name) private pacientesModel: Model<Pacientes>,
  ) {}
  create(createPacienteDto: CreatePacienteDto) {
    return 'This action adds a new paciente';
  }

  async findAll(page: number = 0, qty: number = 50): Promise<PacientesDto> {
    const total = await this.pacientesModel.count();
    const data = await this.pacientesModel
      .find()
      .skip(qty * page)
      .limit(qty)
      .exec();
    const pacientes = {
      total: total,
      offset: page,
      data: data,
    };
    return pacientes;
  }

  findOne(id: number) {
    return `This action returns a #${id} paciente`;
  }

  update(id: number, updatePacienteDto: UpdatePacienteDto) {
    return `This action updates a #${id} paciente`;
  }

  remove(id: number) {
    return `This action removes a #${id} paciente`;
  }
}
