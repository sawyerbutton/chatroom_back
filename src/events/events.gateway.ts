import {
  WebSocketGateway,
  SubscribeMessage,
  WsResponse,
  WebSocketServer,
  WsException,
} from '@nestjs/websockets';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { messages } from '@nestjs/core/constants';

@WebSocketGateway()
export class EventsGateway {
  @WebSocketServer() server;

  @SubscribeMessage('events')
  onEvent(client, data): Observable<WsResponse<string>> {
    const event = 'events';
    const response = JSON.stringify(data);
    console.log(response);
    return from(response).pipe(map(res => ({ event, data: res })));
  }
}