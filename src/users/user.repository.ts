import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { DarmasUserDocument, DarmasUser } from './schemas/users.schema';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(DarmasUser.name) private userModel: Model<DarmasUserDocument>,
  ) {}

  async findOne(userFilterQuery: FilterQuery<DarmasUser>): Promise<DarmasUser> {
    return this.userModel.findOne(userFilterQuery);
  }

  async find(usersFilterQuery: FilterQuery<DarmasUser>): Promise<DarmasUser[]> {
    return this.userModel.find(usersFilterQuery);
  }

  async create(user: DarmasUser): Promise<DarmasUser> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async findOneAndUpdate(
    userFilterQuery: FilterQuery<DarmasUser>,
    user: Partial<DarmasUser>,
  ): Promise<DarmasUser> {
    return this.userModel.findOneAndUpdate(userFilterQuery, user, {
      new: true,
    });
  }
}
