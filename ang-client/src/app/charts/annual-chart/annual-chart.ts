import { Component, Input, OnInit } from '@angular/core';
import { AnnualChartData } from '../../models';
import { YEARS } from '../../shared';
import { Store } from '@ngrx/store';
import { chartOptions, chartColors } from '../chart-settings';

@Component({
  selector: 'annual-chart',
  templateUrl: './annual-chart.html',
  styleUrls: ['./annual-chart.scss']
})
export class AnnualChart implements OnInit {
  // Chart data is input from parent component asynchronously
  @Input() chartData: AnnualChartData;

  constructor() { }

  ngOnInit() {
  }

  // lineChart
  public chartType:string = 'bar';
  public chartLegend:boolean = true;
  public chartOptions:any = chartOptions;
  public chartColors:Array<any> = chartColors;
  public chartLabels:Array<any> = YEARS;

  // events
  public chartClicked(e:any):void {
    // console.log(e);
  }
  public chartHovered(e:any):void {
    // console.log(e);
  }

}
