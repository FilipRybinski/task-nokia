import { Component, Input, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { Country, Summary } from 'src/app/shared/models/summary.model';
Chart.register(...registerables);
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit{
  @Input() dataForChart!:Country;
  ngOnInit(): void {
    var labels:string[]=Object.keys(this.dataForChart).slice(4,9);
    var data:number[]=Object.values(this.dataForChart).slice(4,9);
    this.RenderChart(labels,data);
  }
  RenderChart(lables:string[],data:number[]){
    new Chart('chart', {
      type: 'line',
      data: {
        labels: lables,
        datasets: [{
          label: 'Value',
          data: data,
          backgroundColor:'rgba(255, 99, 132, 0.2)',
        }]
      },
      options: {
        scales: {
          y: {
            title: {
              display: true,
              text: 'Values'
            },
          }
        }
      },
    });

  }

}
