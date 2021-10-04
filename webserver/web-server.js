import { WebSocketServer, WebSocket } from 'ws';

const wsServer = new WebSocketServer({ port: 8081 });

wsServer.on('connection', function connection(wss) {
    const ws = new WebSocket('ws://localhost:8080');
    ws.on('message', function incoming(message) {
        wss.send(message.toString());
    });
}); 
