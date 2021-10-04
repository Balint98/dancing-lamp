import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class DancingManService {
  
  newFrameSubject: Subject<string[]> = new Subject<string[]>();

  constructor() {

    let subject = webSocket("ws://localhost:8081");

    subject.subscribe(
      (msg: any) => {
        //console.log('message received from server: ', msg);
        this.newFrameSubject.next(msg);
       }, // Called whenever there is a message from the server.
      err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      () => {
        console.log("disconnect");
      } // Called when connection is closed (for whatever reason).
    );

    // let i = 0;
    // setInterval(()=>{
    //   if(i===this.frames.length-1){
    //     i = 0;
    //   }else{
    //     i++;
    //   }
    //   this.newFrameSubject.next(this.frames[i]);
    // }, 250);
  }
}
