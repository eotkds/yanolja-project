import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create({ name, phone, email }) {
    return await this.userModel.create({ name, phone, email });
  }

  async findAll() {
    return await this.userModel.findAll();
  }
}
