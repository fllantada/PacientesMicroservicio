import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type sedeDocument = Sede & Document;

@Schema()
export class Sede {
  @Prop({ required: true, unique: true })
  id_dentalink: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  direccion: string;

  @Prop({ required: true })
  dentistas: [{ id_dentalink: number; name: string }];
}

export const sedeSchema = SchemaFactory.createForClass(Sede);
