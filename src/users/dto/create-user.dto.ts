import { IsEmail, IsEnum, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'])
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
