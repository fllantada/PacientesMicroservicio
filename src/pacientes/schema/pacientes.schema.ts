import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pacientes extends Document {
  @Prop({ required: true, unique: true })
  id_dentalink: number;
  @Prop()
  dni?: string;
  @Prop()
  nombre?: string;
  @Prop()
  apellidos: string;
  @Prop()
  fecha_nacimiento: string;
  @Prop()
  fecha_afiliacion: string;
  @Prop()
  telefono: string;
  @Prop()
  celular: string;
  @Prop()
  ciudad: string;
  @Prop()
  direccion: string;
  @Prop()
  email: string;
  @Prop()
  provincia: string;
}

export const PacientesSchema = SchemaFactory.createForClass(Pacientes);
