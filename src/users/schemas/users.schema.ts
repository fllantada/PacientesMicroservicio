import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

type Role = 'Administrador' | 'Usuario' | 'Paciente | Odontologo';

export type DarmasUserDocument = DarmasUser & Document;

@Schema()
export class DarmasUser extends Document {
  @Prop({ required: true, unique: true, lowercase: true })
  email: string;
  @Prop()
  name?: String;
  @Prop()
  data?: any[];
  @Prop({ type: Date, default: Date.now })
  signupDate: Date;
  @Prop()
  lastlogin?: Date;

  @Prop({ type: String, default: 'Usuario' })
  access: Role;
}

export const DarmasUserSchema = SchemaFactory.createForClass(DarmasUser);
