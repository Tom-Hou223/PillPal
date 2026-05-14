import { io, Socket } from 'socket.io-client';
import { FamilyManager } from './api';

let socket: Socket | null = null;

const SOCKET_URL = 'http://192.168.31.90:3001';

export function connectSocket() {
  const familyId = FamilyManager.getCurrentFamilyId();
  if (!familyId) return;

  disconnectSocket();

  socket = io(SOCKET_URL, {
    query: { familyId },
    transports: ['websocket'],
    timeout: 5000,
    reconnectionAttempts: 2,
    autoConnect: true,
    forceNew: true,
  });

  socket.on('connect', () => {
    console.log('[Socket] 已连接');
  });

  socket.on('disconnect', () => {
    console.log('[Socket] 已断开');
  });

  socket.on('connect_error', () => {
    // Silently ignore - Socket is optional, don't spam console
    socket?.disconnect();
  });

  return socket;
}

export function disconnectSocket() {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
}

export function onFamilyEvent(event: string, callback: (data: any) => void) {
  if (!socket) return;
  socket.on(event, callback);
  return () => {
    socket?.off(event, callback);
  };
}

export function getSocket(): Socket | null {
  return socket;
}
