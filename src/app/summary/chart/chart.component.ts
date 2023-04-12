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
  @Input() dataForChart!:Country[];
  ngOnInit(): void {
    var global={};
    this.dataForChart.map((obj)=>{
       Object.assign(global,{[obj.Country] : obj.TotalDeaths})
    })
    var labels:string[]=Object.keys(global);
    var data:number[]=Object.values(global);
    this.RenderChart(labels,data);
  }
  RenderChart(lables:string[],data:number[]){
    new Chart('chart', {
      type: 'line',
      data: {
        labels: lables,
        datasets: [{
          label: 'Total Deaths',
          data: data,
          backgroundColor:'rgba(255, 99, 132, 0.2)',
        }]
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Country'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Amount'
            },
          }
        }
      },
    });

  }

}
