import { Controller, Get } from '@nestjs/common';

@Controller('liquidaciones/semanales')
export class LiquidacionesController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
