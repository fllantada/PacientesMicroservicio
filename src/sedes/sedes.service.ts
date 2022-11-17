import { Injectable } from '@nestjs/common';
import { SedesRepository } from './sedes.repository';

@Injectable()
export class SedesService {
  constructor(private repository: SedesRepository) {}

  async getActiveSedes() {
    const sedes = await this.repository.findAll({});
    console.log('sedes es: ', sedes);
    return sedes;
  }

  findOne(id: number) {
    return `This action returns a #${id} sede`;
  }

  remove(id: number) {
    return `This action removes a #${id} sede`;
  }
}
