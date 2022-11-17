import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type liquidacionDocument = Liquidacion & Document;

@Schema()
export class Liquidacion extends Document {
  @Prop({ required: true, unique: true })
  id_dentalink: number;
  @Prop({ required: true })
  id_sucursal: number;
  @Prop({ required: true })
  id_dentista: number;
  @Prop({ required: true })
  monto: number;
  @Prop({ required: true })
  fecha_inicio: Date;
  @Prop({ required: true })
  fecha_termino: Date;

  @Prop()
  link_detalle?: string;
}

export const liquidacionSchema = SchemaFactory.createForClass(Liquidacion);
