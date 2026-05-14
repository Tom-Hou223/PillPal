import { IsString, IsNotEmpty, IsOptional, IsInt } from 'class-validator';

export class CreateMedicineDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

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
