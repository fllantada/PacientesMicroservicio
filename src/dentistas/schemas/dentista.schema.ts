import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type dentistaDocument = Dentista & Document;

@Schema()
export class Dentista {
  @Prop({ required: true, unique: true })
  id_dentista: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  especialidad: string;

  @Prop({ required: true })
  contratos_sucursal: number[];
}

export const dentistaSchema = SchemaFactory.createForClass(Dentista);
