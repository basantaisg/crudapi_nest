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
    return this.userDetails.push(User);
  }

  findAll() {
    return this.userDetails;
  }

  findOne(id: string) {
    const findUser = this.userDetails.filter((user) => user.id === id);
    return findUser;
  }
}
