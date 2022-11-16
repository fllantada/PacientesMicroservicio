import { Controller, Get } from '@nestjs/common';

@Controller('liquidaciones')
export class LiquidacionesController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
