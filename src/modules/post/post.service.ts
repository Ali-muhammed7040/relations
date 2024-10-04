import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/models/post.entity';
import { User } from 'src/models/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  createPost(user: User, title: string, content: string): Promise<Post> {
    const post = this.postRepository.create({ user, title, content });
    return this.postRepository.save(post);
  }
}
