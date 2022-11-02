import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {
    this.validateUser('franciscollantada@gmail.com');
  }

  async validateUser(username: string): Promise<any> {
    const user: User = await this.usersService.findOne(username);

    if (user.access == 'Administrador') {
      return user;
    }
    return null;
  }
}
