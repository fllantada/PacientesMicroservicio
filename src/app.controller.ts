import { Controller, Request, Get } from '@nestjs/common';
import { Public } from './auth/decorators/public.decorator';

@Controller()
export class AppController {
  constructor() {}
  @Get('')
  @Public()
  async login(@Request() req) {
    return 'BIENVENIDO A LA WEB';
  }
}
