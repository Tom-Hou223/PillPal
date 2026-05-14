import { IsString, IsNotEmpty, IsOptional, Length } from 'class-validator';

export class LoginByNicknameDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 20)
  nickname!: string;

  @IsString()
  @IsOptional()
  password?: string;
}