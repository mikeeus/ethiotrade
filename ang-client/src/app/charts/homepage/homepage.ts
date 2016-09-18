import { Component, Input, OnInit } from '@angular/core';
import { AnnualChart } from '../../models';

@Component({
  selector: 'homepage-chart',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss']
})
export class HomepageChart implements OnInit {
  @Input() chartData: AnnualChart;

  constructor() { }

  ngOnInit() {
  }

}
