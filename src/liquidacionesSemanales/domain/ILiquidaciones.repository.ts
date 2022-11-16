import { LiquidacionDentista } from './entities/LiquidacionDentista';
import { PagoSede } from './entities/PagoSede';
import { Sede } from './entities/Sede';

export interface ILiquidacionesRepository {
  fechaInicio: string;
  fechaFin: string;
  getPagosSemanales(): Promise<Array<PagoSede>>;
  getLiquidacionesSemanales(): Promise<Array<LiquidacionDentista>>;
  getSedes(): Promise<Array<Sede>>;
}
