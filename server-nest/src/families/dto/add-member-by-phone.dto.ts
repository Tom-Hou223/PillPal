import { IsString, IsNotEmpty } from 'class-validator';

export class AddMemberByPhoneDto {
  @IsString()
  @IsNotEmpty()
  phone!: string;

  @IsString()
  @IsNotEmpty()
  relationship!: string;
}
