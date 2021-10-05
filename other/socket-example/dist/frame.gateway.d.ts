import { OnGatewayConnection, WsResponse } from '@nestjs/websockets';
import { Observable } from 'rxjs';
import { Server } from 'ws';
import * as WebSocket from 'ws';
export declare class FrameGateway implements OnGatewayConnection {
    server: Server;
    handleConnection(client: WebSocket, ...args: any[]): void;
    findAll(data: any): Observable<WsResponse<number>>;
    identity(data: number): Promise<number>;
}
