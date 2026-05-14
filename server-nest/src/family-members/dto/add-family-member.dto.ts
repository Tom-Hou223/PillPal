import { IsString, IsNotEmpty, IsOptional, IsInt } from 'class-validator';

export class AddFamilyMemberDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsOptional()
  @IsString()
  relationship?: string;

  @IsOptional()
  @IsInt()
  age?: number;
}
