import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(
    private userService: UserService, //
  ) {}
  @Mutation(() => User)
  create(
    @Args('name') name: string,
    @Args('phone') phone: string,
    @Args('email') email: string,
  ) {
    return this.userService.create({ name, phone, email });
  }
  @Query(() => [User])
  async fetchAllUser() {
    return await this.userService.findAll();
  }
}
