import { Injectable } from '@nestjs/common';
import { Users } from './interfaces/Users';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UsersService {
  private readonly userDetails: Users[] = [];

  createUser(createUserDto: CreateUserDto) {
    const id = uuid();
    this.userDetails.push();
  }
}
