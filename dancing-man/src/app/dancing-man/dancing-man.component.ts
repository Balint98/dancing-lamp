import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DancingManService } from '../dancing-man.service';

@Component({
  selector: 'app-dancing-man',
  templateUrl: './dancing-man.component.html',
  styleUrls: ['./dancing-man.component.css']
})
export class DancingManComponent implements OnInit {

  constructor(private dancingManService: DancingManService) { }

  @ViewChild('dancingCanvas')
  private dancingCanvas!: ElementRef<HTMLCanvasElement>;
  private context!: CanvasRenderingContext2D;
  private frame: string[] = [];

  ngAfterViewInit(): void {
    // initial configuration
    this.dancingCanvas.nativeElement.height = 500; // 500
    this.dancingCanvas.nativeElement.width = 500; // 500
    //console.log(this.dancingCanvas.nativeElement.height);
    this.context = this.dancingCanvas.nativeElement.getContext('2d')!;

    this.updateFrame();
  }


  ngOnInit(): void {
    this.dancingManService.getFrame()
      .subscribe((next: string[])=>{
        console.log(next);
        this.frame.slice().reverse();
      });

      this.dancingManService.newFrameSubject
        .subscribe((next: string[])=>{
          //console.log(next);
          this.frame = next.map((x) => x);
          this.frame.reverse();
          this.updateFrame();
        });
  }

  private updateFrame(): void {
    this.context.clearRect(0, 0, this.dancingCanvas.nativeElement.width, this.dancingCanvas.nativeElement.height);
    // drawing
    let arcRadius = this.dancingCanvas.nativeElement.height / 64 / 2; // 3.9
    let row = 0;
    for(let i = 0;i < this.frame.length; i++){
      let column = i % 64;
      if(column === 63){
        row++;
      }

      this.context.beginPath();
      if(this.frame[i] === "0"){
        this.context.fillStyle="blue";
      }else if(this.frame[i] === "1"){
        this.context.fillStyle="red";
      }else if(this.frame[i] === "2"){
        this.context.fillStyle="black";
      }
      
      this.context.arc(column*arcRadius*2,row*arcRadius*2,arcRadius,0,360);
      this.context.fill();
    }
  }

}
