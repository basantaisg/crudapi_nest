import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  // ?role=Value
  @Get()
  findAll(@Query('role') role?: CreateUserDto['role']) {
    return this.usersService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body(ValidationPipe) user: CreateUserDto) {
    this.usersService.create(user);
    return 'User created Successfully!';
  }

  @Patch(':id')
  update(
    @Body(ValidationPipe) newUser: UpdateUserDto,
    @Param('id') id: string,
  ) {
    return this.usersService.update(id, newUser);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
