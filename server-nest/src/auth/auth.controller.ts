import {
  Controller,
  Post,
  Get,
  Put,
  Body,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CurrentUser } from './decorators/current-user.decorator';
import { LoginDto } from './dto/login.dto';
import { LoginByPhoneDto } from './dto/login-phone.dto';
import { LoginByNicknameDto } from './dto/login-nickname.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async wxLogin(@Body() dto: LoginDto) {
    return this.authService.wxLogin(dto.code, dto.userInfo);
  }

  @Post('login-by-phone')
  async loginByPhone(@Body() dto: LoginByPhoneDto) {
    return this.authService.loginByPhone(dto);
  }

  @Post('login-by-nickname')
  async loginByNickname(@Body() dto: LoginByNicknameDto) {
    return this.authService.loginByNickname(dto);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@CurrentUser('id') userId: number) {
    return this.authService.getProfile(userId);
  }

  @Put('profile')
  @UseGuards(JwtAuthGuard)
  async updateProfile(
    @CurrentUser('id') userId: number,
    @Body() dto: UpdateProfileDto,
  ) {
    return this.authService.updateProfile(userId, dto);
  }

  @Post('upload-avatar')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
    FileInterceptor('avatar', {
      storage: diskStorage({
        destination: './uploads/avatars',
        filename: (req: any, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
          const userId = req.user?.id;
          const ext = extname(file.originalname);
          cb(null, `avatar_${userId}_${Date.now()}${ext}`);
        },
      }),
      fileFilter: (req: any, file: Express.Multer.File, cb: (error: Error | null, accept: boolean) => void) => {
        const allowed = /jpeg|jpg|png|gif|webp/;
        const extOk = allowed.test(extname(file.originalname).toLowerCase());
        const mimeOk = allowed.test(file.mimetype);
        if (extOk && mimeOk) {
          cb(null, true);
        } else {
          cb(new BadRequestException('只支持图片格式'), false);
        }
      },
      limits: { fileSize: 5 * 1024 * 1024 },
    }),
  )
  async uploadAvatar(
    @CurrentUser('id') userId: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.authService.uploadAvatar(userId, file);
  }

  @Post('refresh')
  async refreshToken(@Body('refreshToken') refreshToken: string) {
    return this.authService.refreshToken(refreshToken);
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  async logout(@Req() req: any, @CurrentUser('id') userId: number) {
    const authHeader = req.headers?.authorization;
    if (!authHeader) {
      throw new BadRequestException('缺少认证令牌');
    }
    const token = authHeader.replace('Bearer ', '');
    return this.authService.logout(userId, token);
  }
}
