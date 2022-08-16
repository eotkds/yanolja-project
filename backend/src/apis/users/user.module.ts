/*
220816 수정
*/

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [
    SequelizeModule.forFeature([
      User, //
    ]),
  ],
  providers: [
    UserService, //
    UserResolver, //
  ],
})
export class UserModule {}
