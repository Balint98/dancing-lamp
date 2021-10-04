// import { WebSocketServer, WebSocket } from 'ws';

// const ws = new WebSocket('ws://localhost:8080');
// const wsServer = new WebSocketServer({ port: 8081 });
// let wsSocket;

// wsServer.on('connection', function connection(wss) {
//     wsSocket = wss;
// }); 

// ws.on('open', function open(){
//     console.log("connected to ws://localhost:8080");
// });

// ws.on('message', function incoming(message) {
//     try {
//         wsSocket.send(message.toString());
//     } catch (error) {
        
//     }
// });
import { WebSocketServer, WebSocket } from 'ws';

const wsServer = new WebSocketServer({ port: 8081 });

wsServer.on('connection', function connection(wss) {
    console.log("connected");
    const ws = new WebSocket('ws://localhost:8080');
    ws.on('message', function incoming(message) {
        console.log("message");
        wss.send(message.toString());
    });
});
