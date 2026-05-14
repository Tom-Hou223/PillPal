import { IsString, IsNotEmpty, IsOptional, IsArray } from 'class-validator';

export class CreatePlanDto {
  @IsString()
  @IsNotEmpty()
  medicineName!: string;

  @IsString()
  @IsNotEmpty()
  memberName!: string;

  @IsOptional()
  frequency?: string;

  @IsOptional()
  @IsArray()
  timeSlots?: any[];

  @IsOptional()
  startDate?: string;

  @IsOptional()
  endDate?: string;
}
