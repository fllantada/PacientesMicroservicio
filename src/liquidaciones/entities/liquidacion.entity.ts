export class Liquidacion {
  id_liquidacion: number;
  id_sucursal: number;
  id_dentista: number;
  fecha_inicio: Date;
  fecha_fin: Date;
  monto: number;
  link_detalle?: string;
}
