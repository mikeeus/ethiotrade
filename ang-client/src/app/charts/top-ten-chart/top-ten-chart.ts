import { Component, Input, OnInit } from '@angular/core';
// import { TopTenChartData } from '../../models';
import { Store } from '@ngrx/store';
import { chartOptions, chartColors } from '../chart-settings';

@Component({
  selector: 'top-ten-chart',
  templateUrl: './top-ten-chart.html',
  styleUrls: ['./top-ten-chart.scss']
})
export class TopTenChart implements OnInit {
  // Chart data and labels are input from parent component asynchronously
  @Input() chartData;
  @Input() chartLabels;

  constructor() { }

  ngOnInit() {
  }

  // Bar Chart
  public chartType:string = 'bar';
  public chartLegend:boolean = true;
  public chartOptions:any = chartOptions;
  public chartColors:Array<any> = chartColors;

  // events
  public chartClicked(e:any):void {
    // console.log(e);
  }
  public chartHovered(e:any):void {
    // console.log(e);
  }

}
