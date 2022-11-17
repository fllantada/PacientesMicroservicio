import { Injectable } from '@nestjs/common';
import { DentistasRepository } from './dentistas.repository';
import { CreateDentistaDto } from './dto/create-dentista.dto';
import { UpdateDentistaDto } from './dto/update-dentista.dto';

@Injectable()
export class DentistasService {
  constructor(private repository: DentistasRepository) {}
  create(createDentistaDto: CreateDentistaDto) {
    return 'This action adds a new dentista';
  }

  async findAll() {
    return this.repository.getAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} dentista`;
  }

  update(id: number, updateDentistaDto: UpdateDentistaDto) {
    return `This action updates a #${id} dentista`;
  }

  remove(id: number) {
    return `This action removes a #${id} dentista`;
  }
}
