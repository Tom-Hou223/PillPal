import { OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
export declare class RedisService implements OnModuleDestroy {
    private configService;
    private readonly logger;
    readonly client: Redis;
    connected: boolean;
    constructor(configService: ConfigService);
    onModuleDestroy(): Promise<void>;
}
