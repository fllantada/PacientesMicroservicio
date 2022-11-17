export class Pago {
  id_pago_dentalink: number;
  id_sucursal: number;
  medio_pago:
    | 'Efectivo'
    | 'Mercadopago Dar Mas'
    | 'Bono'
    | 'Mercadopago Especialista'
    | 'GiftCard';

  monto: number;
}
