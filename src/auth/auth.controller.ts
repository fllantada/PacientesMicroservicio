import { Body, Controller, Post, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { AuthDto } from './dto/auth.dto';
import { Request } from 'express';

/* import { RegisterAuthDto } from './dto/register-auth.dto'; */

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /*   @Post('register')
  handleRegister(@Body() registerBody: RegisterAuthDto) {
    return this.authService.register(registerBody);
  } */

  @Post('login')
  @Public()
  handleLogin(@Req() request: Request, @Body() loginBody: AuthDto) {
    console.log(request.headers);
    return this.authService.login(loginBody.email, loginBody.hash);
  }
}
