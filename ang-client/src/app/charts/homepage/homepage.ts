import { Component, Input, OnInit } from '@angular/core';
import { AnnualChart } from '../../models';
import { YEARS } from '../../shared';
import { Store } from '@ngrx/store';
import { chartOptions, chartColors } from '../chart-settings';

@Component({
  selector: 'homepage-chart',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss']
})
export class HomepageChart implements OnInit {
  // Chart data is input from parent component asynchronously
  @Input() chartData;

  constructor() { }

  ngOnInit() {
  }

  // lineChart
  public chartType:string = 'bar';
  public chartLegend:boolean = true;
  public chartOptions:any = chartOptions;
  public chartColors:Array<any> = chartColors;
  public chartLabels:Array<any> = YEARS.reverse();

  // events
  public chartClicked(e:any):void {
    // console.log(e);
  }
  public chartHovered(e:any):void {
    // console.log(e);
  }

}
