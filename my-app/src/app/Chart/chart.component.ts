import {Component, OnInit} from '@angular/core';
import {ChartService} from "./chart.service";

@Component({
  selector: 'line-chart-demo',
  templateUrl: './Line-chart-demo.html',
  providers: [ChartService],
})


export class LineChartDemoComponent implements OnInit{
  ngOnInit(): void {
    this.getChart();
  }
  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81], label: 'Series A'},
    {data: [28, 48, 40, 19], label: 'Series B'},
    {data: [18, 48, 77, 9], label: 'Series C'}
  ];
  public lineChartLabels:Array<any> = ['CPU', 'MEMORY', 'HDD', 'IP'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';



  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
  constructor(private chartService: ChartService) { }
  public getChart(){
    this.chartService.getCharts().then()
  }
}
