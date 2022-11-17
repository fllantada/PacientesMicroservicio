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
    console.log(this.datesService.lunesEstaSemanaDate());

    const filter = {
      $and: [
        {
          fecha_termino: { $gte: this.datesService.lunesSemanaAnteriorDate() },
        },
        {
          fecha_termino: { $lte: this.datesService.lunesEstaSemanaDate() },
        },
      ],
    };

    const data = await this.repository.find(filter);

    console.log(data[0], data.length);
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
