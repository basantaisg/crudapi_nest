import { HttpException, Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: uuid(),
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      role: 'INTERN',
    },
    {
      id: uuid(),
      name: 'Roma Doe',
      email: 'romadoe@gmail.com',
      role: 'ADMIN',
    },
    {
      id: uuid(),
      name: 'Baka Doe',
      email: 'bakadoe@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: uuid(),
      name: 'Bakasur',
      email: 'bakasur@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: uuid(),
      name: 'Randi Doe',
      email: 'randidoe@gmail.com',
      role: 'INTERN',
    },
    {
      id: uuid(),
      name: 'Suman Doe',
      email: 'sumandoe@gmail.com',
      role: 'INTERN',
    },
  ];

  findAll(role?: CreateUserDto['role']) {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: string) {
    return this.users.find((user) => user.id === id);
  }

  create(createUserDto: CreateUserDto) {
    let id = uuid();
    const newUser = { id, ...createUserDto };
    return this.users.push(newUser);
  }

  update(id: string, updateUser: UpdateUserDto) {
    const user = this.users.find((user) => user.id === id);
    if (user) {
      return Object.assign(user, updateUser);
    }
    throw new Error('User not found!');
  }

  delete(id: string) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex >= 0) {
      return this.users.splice(userIndex, 1);
    }
    return new HttpException('User not found!', 404);
  }
}
