import { Injectable } from '@nestjs/common';

@Injectable()
export class DatesService {
  lunesEstaSemanaString(): string {
    const monday = this.lunesEstaSemanaDate();
    return monday.toISOString().slice(0, 10);
  }
  lunesSemanaAnteriorString(): string {
    const monday = this.lunesSemanaAnteriorDate();
    return monday.toISOString().slice(0, 10);
  }
  lunesEstaSemanaDate(): Date {
    const date = new Date();
    const day = date.getDay();
    const diff = date.getDate() - day + (day == 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }
  lunesSemanaAnteriorDate(): Date {
    const date = new Date();
    const day = date.getDay();
    const diff = date.getDate() - day + (day == 0 ? -6 : 1);
    return new Date(date.setDate(diff - 7));
  }
}
