import { Injectable, OnModuleDestroy, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleDestroy {
  private readonly logger = new Logger(RedisService.name);
  public readonly client: Redis;
  public connected = false;

  constructor(private configService: ConfigService) {
    this.client = new Redis({
      host: this.configService.get('redis.host'),
      port: this.configService.get('redis.port'),
      password: this.configService.get('redis.password'),
      lazyConnect: true,
      maxRetriesPerRequest: null,
      retryStrategy: () => null,
      enableOfflineQueue: false,
    });

    // Suppress connection error events
    this.client.on('error', () => {});

    this.client
      .connect()
      .then(() => {
        this.connected = true;
        this.logger.log('Redis 已连接');
      })
      .catch(() => {
        this.client.disconnect();
        this.connected = false;
        this.logger.warn('Redis 未连接，黑名单/缓存功能将跳过');
      });
  }

  async onModuleDestroy() {
    try {
      if (this.connected) {
        await this.client.quit();
      }
    } catch {
      // ignore
    }
  }
}
