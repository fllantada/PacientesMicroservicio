import { Injectable } from '@nestjs/common';

@Injectable()
export class DentalinkService {
  findAll() {
    return `This action returns all dentalink`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dentalink`;
  }

  remove(id: number) {
    return `This action removes a #${id} dentalink`;
  }
}
