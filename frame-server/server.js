import { WebSocketServer } from 'ws';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const processLineByLine = require('./frame_server.cjs');

const FPS = 64;

const lines = processLineByLine();
const wss = new WebSocketServer({ port: 8080 });
wss.on('connection', function connection(ws) {
    let i = 0;
    setInterval(() => {
        if(i === lines.length){
            i = 0;
        }
        ws.send(JSON.stringify(lines[i++]));
    }, 1000 / FPS);
});