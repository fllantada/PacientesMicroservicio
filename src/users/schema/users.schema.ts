import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
enum Role {
  Administrador = 'Administrador',
  Usuario = 'Usuario',
  Paciente = 'Paciente',
  Odontologo = 'Odontologo',
}
@Schema()
export class DarmasUsers extends Document {
  @Prop({ required: true, unique: true, lowercase: true })
  email: string;
  @Prop()
  name?: string;
  @Prop()
  data?: any[];
  @Prop({ type: Date, default: Date.now })
  signupDate: Date;
  @Prop()
  lastlogin?: Date;

  @Prop({ type: String, enum: Role, default: 'Usuario' })
  access: Role;
}

export const DarmasUsersSchema = SchemaFactory.createForClass(DarmasUsers);
