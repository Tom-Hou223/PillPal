import { IsString, IsNotEmpty } from 'class-validator';

export class BarcodeRecognizeDto {
  @IsString()
  @IsNotEmpty()
  barcode!: string;
}
