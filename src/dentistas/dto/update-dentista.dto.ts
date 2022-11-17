import { PartialType } from '@nestjs/swagger';
import { CreateDentistaDto } from './create-dentista.dto';

export class UpdateDentistaDto extends PartialType(CreateDentistaDto) {}
