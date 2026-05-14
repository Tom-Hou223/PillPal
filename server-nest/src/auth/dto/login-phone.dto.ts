import { IsString, IsNotEmpty, IsOptional, Matches } from 'class-validator';

export class LoginByPhoneDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^1[3-9]\d{9}$/, { message: '手机号格式不正确' })
  phone!: string;

  @IsString()
  @IsOptional()
  password?: string;
}