import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DarmasUsers } from './schema/users.schema';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';

// This should be a real class/interface representing a user entity

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(DarmasUsers.name) private usersModel: Model<DarmasUsers>,
  ) {}

  async findOne(email: string): Promise<User | undefined> {
    const user = await this.usersModel.findOne({ email: email });

    return user.toObject() ? user.toObject() : undefined;
  }
}
