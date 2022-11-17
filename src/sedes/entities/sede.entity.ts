export class Sede {
  id_sede: number;
  name: string;
  direccion: string;
  dentistas: { id_dentista: number; name: string }[];
}
