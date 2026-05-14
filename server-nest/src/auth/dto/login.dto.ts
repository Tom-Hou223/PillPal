import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  code!: string;

  @IsOptional()
  userInfo?: any;
}