import { Injectable } from '@nestjs/common';
import { DatesService } from 'src/utils/dates/dates.service';
import { CreateLiquidacioneDto } from './dto/create-liquidacione.dto';
import { UpdateLiquidacioneDto } from './dto/update-liquidacione.dto';
import { LiquidacionesRepository } from './liquidaciones.repository';

@Injectable()
export class LiquidacionesService {
  constructor(
    private repository: LiquidacionesRepository,
    private datesService: DatesService,
  ) {}

  create(createLiquidacioneDto: CreateLiquidacioneDto) {
    return 'This action adds a new liquidacione';
  }

  async getLiquidacionLastWeek() {
    console.log('getLiquidacionLastWeek');
    console.log(this.datesService.lunesEstaSemana());

    const data = await this.repository.find({});

    console.log(data[0]);
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} liquidacione`;
  }

  update(id: number, updateLiquidacioneDto: UpdateLiquidacioneDto) {
    return `This action updates a #${id} liquidacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} liquidacione`;
  }
}
