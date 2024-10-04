import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find({ relations: ['posts'] });
  }

  createUser(name: string, email: string): Promise<User> {
    console.log('user');
    const user = this.userRepository.create({ name, email });
    return this.userRepository.save(user);
  }

  findUserById(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id }, relations: ['posts'] });
  }
}
