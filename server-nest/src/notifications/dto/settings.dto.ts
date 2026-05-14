import { IsOptional, IsInt } from 'class-validator';

export class SettingsDto {
  @IsOptional()
  @IsInt()
  reminderTime?: number;

  @IsOptional()
  @IsInt()
  expiryWarningDays?: number;
}
