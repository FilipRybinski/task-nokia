import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  startValue:number=0;
  @Input() endValue!:number;
  countStop=setInterval(()=>{
    this.startValue++;
    if(this.startValue==this.endValue){
      clearInterval(this.countStop);
    }
  },10);
}
