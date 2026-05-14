import { IsString, IsNotEmpty, IsOptional, IsInt } from 'class-validator';

export class UpdateFamilyMemberDto {
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
