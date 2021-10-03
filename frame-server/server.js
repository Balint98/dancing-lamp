import { WebSocketServer } from 'ws';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const processLineByLine = require('./frame_server.cjs');

processLineByLine().then((result)=>{
    const wss = new WebSocketServer({ port: 8080 });
    wss.on('connection', function connection(ws) {
        let i = 0;
        setInterval(() => {
            if(i === result.length){
                i = 0;
            }
            ws.send(JSON.stringify(result[i++]));
        }, 15.625);
    });
});
