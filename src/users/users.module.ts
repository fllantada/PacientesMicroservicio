import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DarmasUsers, DarmasUsersSchema } from './schema/users.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DarmasUsers.name, schema: DarmasUsersSchema },
    ]),
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
