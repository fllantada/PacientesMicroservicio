import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DentistasService } from './dentistas.service';
import { CreateDentistaDto } from './dto/create-dentista.dto';
import { UpdateDentistaDto } from './dto/update-dentista.dto';

@Controller('dentistas')
export class DentistasController {
  constructor(private readonly dentistasService: DentistasService) {}

  @Post()
  create(@Body() createDentistaDto: CreateDentistaDto) {
    return this.dentistasService.create(createDentistaDto);
  }

  @Get()
  findAll() {
    return this.dentistasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dentistasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDentistaDto: UpdateDentistaDto,
  ) {
    return this.dentistasService.update(+id, updateDentistaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dentistasService.remove(+id);
  }
}
