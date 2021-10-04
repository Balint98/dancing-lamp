import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class DancingManService {
  frames: string[][] = [[]];
  newFrameSubject: Subject<string[]> = new Subject<string[]>();

  constructor() {

    let subject = webSocket("ws://localhost:8081");

    subject.subscribe(
      (msg: any) => {
        // this.newFrameSubject.next(msg);
        this.frames = msg;
        let i = 0;
        setInterval(()=>{
          if(i===this.frames.length-1){
            i = 0;
          }else{
            i++;
          }
          this.newFrameSubject.next(this.frames[i]);
        }, 1000 / 64);
      }, 
      err => console.log(err),
      () => {
        console.log("disconnect");
      }
    );

    // subject.subscribe(
    //   (msg: any) => {
    //     this.newFrameSubject.next(msg);
    //   }, 
    //   err => console.log(err),
    //   () => {
    //     console.log("disconnect");
    //   }
    // );

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
