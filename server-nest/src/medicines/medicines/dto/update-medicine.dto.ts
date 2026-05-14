import { IsOptional, IsString, IsInt } from 'class-validator';

export class UpdateMedicineDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  manufacturer?: string;

  @IsOptional()
  specification?: string;

  @IsOptional()
  category?: string;

  @IsOptional()
  @IsInt()
  stock?: number;

  @IsOptional()
  unit?: string;

  @IsOptional()
  expiryDate?: string;

  @IsOptional()
  dosage?: string;
}
