import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UpdateUserInput } from './dto/updateUserInput';
import { User } from './models/user.entity';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';

@Resolver()
export class UserResolver {
  constructor(
    private userService: UserService, //
  ) {}
  //user 생성
  @Mutation(() => User)
  async createUser(
    @Args('name') name: string,
    @Args('phone') phone: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    const salt = await bcrypt.genSalt(Number(process.env.SALT_DATA));
    const hashedPassword1 = await bcrypt.hash(password, salt);
    const hashedPassword2 = await bcrypt.hash(hashedPassword1, 10);

    return this.userService.create({
      name,
      phone,
      email,
      password: hashedPassword2,
    });
  }

  //user 전체 조회
  @Query(() => [User])
  async fetchAllUsers() {
    return await this.userService.findAll();
  }

  //user ID로 조회
  @Query(() => User)
  async fetchUser(@Args('id', { type: () => String }) id: string) {
    return await this.userService.findOnd({ id });
  }

  //user 업데이트
  @Mutation(() => User)
  async updateUser(
    @Args('id', { type: () => String }) id: string,
    @Args('updateuserInput') updateuserInput: UpdateUserInput,
  ) {
    return await this.userService.update({ id, updateuserInput });
  }

  //user 삭제; softdelete
  @Mutation(() => Boolean)
  async deleteUser(@Args('id', { type: () => String }) id: string) {
    return await this.userService.delete({ id });
  }
}
