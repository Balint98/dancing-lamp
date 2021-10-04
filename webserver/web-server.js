import { WebSocketServer, WebSocket } from 'ws';

const ws = new WebSocket('ws://localhost:8080');
const wsServer = new WebSocketServer({ port: 8081 });

wsServer.on('connection', function connection(wss) {
    ws.on('message', function incoming(message) {
        // console.log("message");
        wss.send(message.toString());
    });
}); 

ws.on('open', function open(){
    console.log("connected to ws://localhost:8080");
});