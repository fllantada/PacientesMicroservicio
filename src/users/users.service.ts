import { Injectable } from '@nestjs/common';
import { UsersRepository } from './user.repository';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  async findUserByEmail(email: string): Promise<User | undefined> {
    console.log('Entre a findUserByEmail');
    const user = await this.repository.findOne({ email: email });

    return user.toObject() ? user.toObject() : undefined;
  }
}
