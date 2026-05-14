import { IsString, IsNotEmpty, IsOptional, IsArray } from 'class-validator';

export class UpdatePlanDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  medicineName?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  memberName?: string;

  @IsOptional()
  frequency?: string;

  @IsOptional()
  @IsArray()
  timeSlots?: any[];

  @IsOptional()
  startDate?: string;

  @IsOptional()
  endDate?: string;

  @IsOptional()
  status?: string;
}
