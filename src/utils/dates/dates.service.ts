import { Injectable } from '@nestjs/common';
import moment from 'moment';

@Injectable()
export class DatesService {
  lunesEstaSemana(): string {
    return moment().isoWeekday('Monday').format('YYYY-MM-DD');
  }
  lunesSemanaAnterior(): string {
    return moment()
      .isoWeekday('Monday')
      .subtract(1, 'week')
      .format('YYYY-MM-DD');
  }
}
