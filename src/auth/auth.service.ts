import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './types/jwtPayload.type';
import { Tokens } from './types/tokens.type';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, hash: number): Promise<Tokens> {
    const user = await this.usersService.findUserByEmail(email);

    console.log(user);
    const payload: JwtPayload = {
      email: user.email,
      sub: user._id,
      access: user.access,
    };

    const token: Tokens = {
      access_token: await this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: '15m',
      }),
    };
    console.log(token);
    return token;
  }
}
