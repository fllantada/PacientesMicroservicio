import { Liquidacion } from './liquidacion.entity';

export interface ILiquidacionesRepository {
  find({}): Promise<Liquidacion[]>;
}
