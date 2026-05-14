import {
  Controller,
  Post,
  Get,
  Body,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  Req,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { FamilyAccessGuard } from '../families/guards/family-access.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { RecognitionService } from './recognition.service';
import { BarcodeRecognizeDto } from './dto/barcode-recognize.dto';
import { HistoryQueryDto } from './dto/history-query.dto';

@Controller('api/medicine/recognize')
export class RecognitionController {
  private readonly logger = new Logger(RecognitionController.name);

  constructor(private readonly recognitionService: RecognitionService) {
    this.logger.log('RecognitionController 初始化完成');
  }

  @Post('barcode')
  @UseGuards(JwtAuthGuard, FamilyAccessGuard)
  async recognizeBarcode(
    @Body() dto: BarcodeRecognizeDto,
    @CurrentUser('id') userId: number,
    @Req() req: any,
  ) {
    this.logger.log('收到 barcode 识别请求:', dto.barcode);
    const result = await this.recognitionService.recognizeBarcode(dto.barcode);

    // Save recognition history
    await this.recognitionService.saveHistory(
      userId,
      BigInt(req.familyId),
      'barcode',
      dto.barcode,
      result.data,
    );

    this.logger.log('barcode 识别完成:', result);
    return result;
  }

  @Post('image')
  @UseGuards(JwtAuthGuard, FamilyAccessGuard)
  @UseInterceptors(FileInterceptor('image', { storage: memoryStorage(), limits: { fileSize: 4 * 1024 * 1024 } }))
  async recognizeImage(
    @UploadedFile() file: Express.Multer.File,
    @CurrentUser('id') userId: number,
    @Req() req: any,
  ) {
    this.logger.log('收到 image 识别请求，文件:', file?.originalname, file?.size, 'bytes');
    if (!file) {
      throw new BadRequestException('请选择图片文件');
    }
    const result = await this.recognitionService.recognizeImage(file.buffer);

    // Save recognition history
    await this.recognitionService.saveHistory(
      userId,
      BigInt(req.familyId),
      'image',
      file.originalname,
      result.data,
    );

    this.logger.log('image 识别完成:', result);
    return result;
  }

  @Get('history')
  @UseGuards(JwtAuthGuard, FamilyAccessGuard)
  async getHistory(
    @Query() query: HistoryQueryDto,
    @CurrentUser('id') userId: number,
    @Req() req: any,
  ) {
    return this.recognitionService.getHistory(
      userId,
      BigInt(req.familyId),
      query.page ?? 1,
      query.limit ?? 20,
    );
  }
}
