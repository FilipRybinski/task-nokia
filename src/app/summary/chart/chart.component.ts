import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Country } from 'src/app/shared/models/summary.model';
// Register chart
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
// Char component is used to create chart for each incoming data about certain country
export class ChartComponent implements OnInit {
  @Input() dataForChart!: Country;

  ngOnInit(): void {
    // Trimming useless data
    var labels: string[] = Object.keys(this.dataForChart).slice(4, 9);
    var data: number[] = Object.values(this.dataForChart).slice(4, 9);
    this.RenderChart(labels, data);
  }

  RenderChart(lables: string[], data: number[]): void {
    // Create chart first param is id of html element, second is config of chart
    new Chart('chart', {
      type: 'pie',
      data: {
        labels: lables,
        datasets: [
          {
            label: 'Value',
            data: data,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
          },
        ],
      },
    });
  }
}
