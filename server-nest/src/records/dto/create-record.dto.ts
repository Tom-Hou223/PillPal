import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateRecordDto {
  @IsNotEmpty()
  planId!: string;

  @IsString()
  @IsNotEmpty()
  medicineName!: string;

  @IsString()
  @IsNotEmpty()
  memberName!: string;

  @IsOptional()
  time?: string;

  @IsOptional()
  date?: string;
}
