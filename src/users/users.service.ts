import { Injectable } from '@nestjs/common';
import { UsersRepository } from './user.repository';
import { InjectModel } from '@nestjs/mongoose';

import { DarmasUser } from './schemas/users.schema';
import { Model } from 'mongoose';

import { User } from './entities/user.entity';

// This should be a real class/interface representing a user entity

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async findUserByEmail(email: string): Promise<User | undefined> {
    console.log('Entre a findUserByEmail');
    const user = await this.userRepository.findOne({ email: email });

    return user.toObject() ? user.toObject() : undefined;
  }
}
