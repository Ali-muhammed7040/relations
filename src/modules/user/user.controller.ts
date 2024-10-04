import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/models/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(
    @Body('name') name: string,
    @Body('email') email: string,
  ): Promise<User> {
    console.log('lleee');
    return this.userService.createUser(name, email);
  }
  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
