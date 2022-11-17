import { Injectable } from '@nestjs/common';
import { LiquidacionDentista } from './domain/entities/LiquidacionDentista';
import { PagoSede } from './domain/entities/PagoSede';
import { Sede } from './domain/entities/Sede';

import { LiquidacionSemanalSedeCreator } from './LiquidacionSemanalSedeCreator';
import { LiquidacionesRepository } from './liquidaciones.repository';

type EmptyLiquidaciones = any;

@Injectable()
export class LiquidacionesService {
  private liquidacionesTerminadas: Array<any> = [];
  private liquidacionesSedes = [];

  constructor(private readonly repository: LiquidacionesRepository) {}

  async createLiquidacionesSemanales(): Promise<any> {
    const { pagos, sedes, liquidaciones } = await this.getUpdatedData();
    this.liquidacionesSedes = await this.createEmptyLiquidaciones(sedes);

    pagos.forEach((pago: PagoSede) => this.addPagoToLiquidaciones(pago));
    liquidaciones.forEach((liquidacion: LiquidacionDentista) =>
      this.addLiquidacionToLiquidaciones(liquidacion),
    );

    this.liquidacionesSedes.forEach(
      (liquidacionTerminada: LiquidacionSemanalSedeCreator) => {
        const liq = liquidacionTerminada.getResumenLiquidacion();
        this.liquidacionesTerminadas.push(liq);
      },
    );
    console.log('liquidacionesTerminadas', this.liquidacionesTerminadas);
    return this.liquidacionesTerminadas;
  }

  addPagoToLiquidaciones(pago: PagoSede) {
    // filtro
    const liquidacionSede = this.findLiquidacion(pago.id_sucursal);
    // agrego el pago
    liquidacionSede.agregarPago(pago);
  }
  addLiquidacionToLiquidaciones(liquidacion: LiquidacionDentista) {
    const liquidacionSede = this.findLiquidacion(liquidacion.id_sucursal);
    liquidacionSede.agregarLiquidacion(liquidacion);
  }

  findLiquidacion(idSucursal: number): LiquidacionSemanalSedeCreator {
    return this.liquidacionesSedes.filter(
      (liq: LiquidacionSemanalSedeCreator) => liq.idSucursal === idSucursal,
    )[0];
  }

  async createEmptyLiquidaciones(sedes: Sede[]): Promise<EmptyLiquidaciones[]> {
    const liquidacionesSedes = sedes.map(
      (sede: any) =>
        new LiquidacionSemanalSedeCreator(
          sede.name,
          sede.id_dentalink,
          this.repository.fechaInicio,
          this.repository.fechaFin,
        ),
    );

    return liquidacionesSedes;
  }

  async getUpdatedData(): Promise<{
    pagos: PagoSede[];
    sedes: Sede[];
    liquidaciones: LiquidacionDentista[];
  }> {
    const pagos: Array<PagoSede> = await this.repository.getPagosSemanales();
    const sedes: Array<Sede> = await this.repository.getSedes();
    const liquidaciones: Array<LiquidacionDentista> =
      await this.repository.getLiquidacionesSemanales();

    console.log(
      'pagos:',
      pagos[0],
      'Sedes:',
      sedes[0],
      'liquidaciones',
      liquidaciones[0],
    );
    return { pagos, sedes, liquidaciones };
  }
}
