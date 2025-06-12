import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  nom: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(6, 255)
  motDePasse: string;

  @IsOptional()
  @IsString()
  adresse?: string;

  @IsOptional()
  @IsString()
  @Length(0, 20)
  telephone?: string;

  @IsOptional()
  @IsEnum(['client', 'admin'])
  role?: 'client' | 'admin';
}
