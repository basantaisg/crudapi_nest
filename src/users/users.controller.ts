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
  findAll(@Query('age', ParseIntPipe) age: number) {
    if(age){
      return this.userService.findByAge(age)
    }
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
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
