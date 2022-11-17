import { LiquidacionSemanalSede } from './domain/entities/LiquidacionSemanalSede';
import { PagoSede } from './domain/entities/PagoSede';
import { LiquidacionDentista } from './domain/entities/LiquidacionDentista';

export class LiquidacionSemanalSedeCreator implements LiquidacionSemanalSede {
  private nombreSucursal: string;
  public idSucursal: number;
  private idDentistas: Array<number> = [];
  private Efectivo = 0;
  private mDarmas = 0;
  private Bono = 0;
  private mEspecialista = 0;
  private liquidacion = 0;
  private links: Array<string> = [];
  private fechaInicio: string;
  private fechaFin: string;

  constructor(
    nombreSucursal: string,
    idSucursal: number,
    fechaInicio: string,
    fechaFin: string,
  ) {
    this.nombreSucursal = nombreSucursal;
    this.idSucursal = idSucursal;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
  }

  agregarPago(pago: PagoSede) {
    switch (pago.medio_pago) {
      case 'Efectivo':
        this.Efectivo += pago.monto;
        break;
      case 'Mercadopago Dar Mas':
        this.mDarmas += pago.monto;
        break;
      case 'Bono':
        this.Bono += pago.monto;
        break;
      case 'Mercadopago Especialista':
        this.mEspecialista += pago.monto;
        break;
    }
  }

  agregarLiquidacion(liquidacion: LiquidacionDentista) {
    const dentista = liquidacion.id_dentista;

    if (!this.idDentistas.includes(dentista)) {
      this.idDentistas.push(dentista);
    }

    this.liquidacion += liquidacion.monto;
    if (liquidacion.link_detalle) {
      this.links.push(liquidacion.link_detalle);
    }
  }

  public getResumenLiquidacion() {
    return {
      nombre_sucursal: this.nombreSucursal,
      id_sucursal: this.idSucursal,
      id_dentistas: this.idDentistas,
      fecha_inicio: this.fechaInicio,
      fecha_fin: this.fechaFin,
      Efectivo: this.Efectivo,
      'Mercadopago Dar Mas': this.mDarmas, // Modificar
      Bono: this.Bono,
      'Mercadopago Especialista': this.mEspecialista, // modificar
      liquidacion: this.liquidacion,
      links: this.links,
    };
  }
}
