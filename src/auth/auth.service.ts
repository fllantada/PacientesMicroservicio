import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {
    this.validateUser('franciscollantada@gmail.com');
  }

  async validateUser(username: string): Promise<any> {
    const user: User = await this.usersService.findOne(username);

    if (
      user.access == 'Administrador' ||
      user.access == 'Usuario' ||
      user.access == 'Dr'
    ) {
      return user;
    }
    return null;
  }
  async login(user: User) {
    const payload = { username: user.email, sub: user.access };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
