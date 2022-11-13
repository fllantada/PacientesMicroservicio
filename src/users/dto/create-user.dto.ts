export class CreateUserDto {
  email: string;
  access: RoleTypes;
}
type RoleTypes = 'Administrador' | 'Usuario';
