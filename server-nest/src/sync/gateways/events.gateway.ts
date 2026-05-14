import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class EventsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server!: Server;

  afterInit(server: Server) {
    console.log('WebSocket 网关已初始化');
  }

  handleConnection(client: Socket) {
    const familyId = client.handshake.query.familyId as string;
    if (familyId) {
      client.join(`family:${familyId}`);
      console.log(`客户端已连接: family=${familyId}`);
    }
    console.log(`客户端已连接: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`客户端已断开: ${client.id}`);
  }

  /**
   * Notify all online members of a family about data changes
   */
  notifyFamilyChange(familyId: bigint | number, event: string, data: any) {
    this.server.to(`family:${familyId}`).emit(event, data);
  }
}
