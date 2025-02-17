import { Injectable } from '@nestjs/common';
import { Users } from './UserModel/User.model';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UsersService {
  private readonly userDetails: Users[] = [];

  createUser(createUserDto: CreateUserDto) {
    const id = uuid();
    const { username, password, email, age } = createUserDto;
    const User: Users = {
      id,
      username,
      password,
      email,
      age,
    };
    this.userDetails.push(User);
  }
}
