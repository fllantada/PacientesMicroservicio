import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DarmasUser, DarmasUserSchema } from './schemas/users.schema';
import { UsersRepository } from './user.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DarmasUser.name, schema: DarmasUserSchema },
    ]),
  ],
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
