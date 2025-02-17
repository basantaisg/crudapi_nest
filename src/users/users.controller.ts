import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { Users } from './UserModel/User.model';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get()
  findByAge(@Query('age', ParseIntPipe) age?: number) {
    if (age) {
      const data: Users[] = this.userService.findAll();
      const filteredData: Users[] = data.filter((user) => user.age === age);
      return filteredData;
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `User detail of id: ${id}`;
  }

  @Put(':id')
  @HttpCode(200)
  updateOne(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return id;
  }

  @Delete(':id')
  @HttpCode(204)
  DeleteUser(@Param('id') id: string) {
    return [];
  }
}
