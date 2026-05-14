import { Module } from '@nestjs/common';
import { SyncController } from './sync.controller';
import { SyncService } from './sync.service';
import { EventsGateway } from './gateways/events.gateway';

@Module({
  controllers: [SyncController],
  providers: [EventsGateway, SyncService],
  exports: [EventsGateway, SyncService],
})
export class SyncModule {}
