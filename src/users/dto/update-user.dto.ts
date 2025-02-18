export class UpdateUserDto {
  name?: string;
  email?: string;
  role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
