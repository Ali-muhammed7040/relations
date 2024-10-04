import { Controller, Post, Body, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { UserService } from '../user/user.service';

@Controller('posts')
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly userService: UserService,
  ) {}

  @Post(':userId')
  async createPost(
    @Param('userId') userId: number,
    @Body('title') title: string,
    @Body('content') content: string,
  ) {
    const user = await this.userService.findUserById(userId);
    return this.postService.createPost(user, title, content);
  }
}
