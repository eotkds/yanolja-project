import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create({ name, phone, email, password }) {
    return await this.userModel.create({ name, phone, email, password });
  }

  async findAll() {
    return await this.userModel.findAll();
  }

  async findOnd({ id }) {
    const user = await this.userModel.findOne({ where: { id } });

    return user;
  }

  async update({ id, updateuserInput }) {
    const updatedUser = await this.userModel.findOne({ where: { id } });
    if (!updatedUser)
      throw new BadRequestException('업데이트할 데이터가 없습니다.');
    updatedUser.set({ ...updateuserInput });

    return await updatedUser.save();
  }

  async delete({ id }) {
    const result = await this.userModel.destroy({ where: { id } });
    return result;
  }
}
