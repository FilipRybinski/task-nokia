import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
// Component to animate a loading cases
export class CounterComponent {
  @Input() endValue!: number;
  // Variables
  startValue: number = 0;

  countStop = setInterval(() => {
    if (this.startValue == this.endValue) {
      clearInterval(this.countStop);
      return;
    }
    this.startValue++;
  }, 10);
}
