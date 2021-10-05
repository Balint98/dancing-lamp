import { Injectable } from '@nestjs/common';
// import { WebSocket } from 'ws';
import * as WebSocket from 'ws';

@Injectable()
export class FrameServiceService {
    private frameSocket = new WebSocket('ws://localhost:8080');

    constructor(){
        this.frameSocket.onopen = ()=>{
            console.log("connected");
        };
    }
}
