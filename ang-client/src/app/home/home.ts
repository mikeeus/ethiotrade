import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
// Chart
import { ChartService, AnnualChart } from '../charts';
import { AnnualChartData } from '../models';
// Reducer actions
import { LOAD_HOMEPAGE_CHART } from '../reducers/charts';

@Component({
  selector: 'home',
  templateUrl: 'home.html',
  styleUrls: ['home.scss']
})
export class Home implements OnInit {
  homepageChart: Observable<AnnualChartData>;

  constructor(
    private chartService: ChartService,
    private store: Store<any>
  ) { }

  ngOnInit() { 
    // Initialize and subscribe to homepageChart store
    this.homepageChart = this.store.select('homepageChart');
    this.chartService.getHomepageChart().subscribe(res => {
      this.store.dispatch({type: LOAD_HOMEPAGE_CHART, payload: res});
    })
  }

}
