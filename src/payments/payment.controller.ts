import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';
import { PaymentService } from './payment.service';

@Controller('pagos')
export class PagosController {
  constructor(private readonly pagosService: PaymentService) {}

  @Get()
  @Public()
  async findAll() {
    console.log('findall');
    return await this.pagosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pagosService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pagosService.remove(+id);
  }
}
