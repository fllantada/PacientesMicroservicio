import { Controller, Request, Get } from '@nestjs/common';
import { Public } from './auth/decorators/public.decorator';

@Controller()
export class AppController {
  constructor() {
    console.log('Inicie app.controller.ts');
  }
  @Get('')
  @Public()
  async login(@Request() req) {
    console.log(req.user);
    return 'BIENVENIDO A LA WEB';
  }
}
