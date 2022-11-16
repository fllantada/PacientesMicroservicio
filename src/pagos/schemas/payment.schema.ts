import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PaymentDocument = Payment & Document;

@Schema()
export class Payment extends Document {
  @Prop({ required: true, unique: true })
  id_pago_dentalink: number;
  @Prop({ required: true })
  id_paciente: string;
  @Prop()
  id_medio_pago?: string;
  @Prop()
  id_sucursal?: string;
  @Prop()
  nombre_paciente?: string;
  @Prop()
  monto_pago: number;
  @Prop()
  fecha_recepcion: Date;
  @Prop()
  fecha_vencimiento: Date;
  @Prop()
  nombre_sucursal: string;
  @Prop({ default: Date.now() })
  fecha_carga: Date;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
