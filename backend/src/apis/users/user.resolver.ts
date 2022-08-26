import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UpdateUserInput } from './dto/updateUserInput';
import { User } from './models/user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(
    private userService: UserService, //
  ) {}
  //user 생성
  @Mutation(() => User)
  create(
    @Args('name') name: string,
    @Args('phone') phone: string,
    @Args('email') email: string,
  ) {
    return this.userService.create({ name, phone, email });
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

  //user 삭제; softdelet
  @Mutation(() => Boolean)
  async deleteUser(@Args('id', { type: () => String }) id: string) {
    return await this.userService.delete({ id });
  }
}
