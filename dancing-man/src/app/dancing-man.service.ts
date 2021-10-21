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
  }
}
