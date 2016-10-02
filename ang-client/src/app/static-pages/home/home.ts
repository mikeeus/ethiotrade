import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
// Chart
import { ChartService, AnnualChart } from '../../charts';
import { AnnualChartData } from '../../models';
// Reducer actions
import { SET_HOMEPAGE_CHART, RESET_HOMEPAGE_CHART } from '../../reducers/charts';

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
    this.store.dispatch({type: RESET_HOMEPAGE_CHART});    
    // Initialize and subscribe to homepageChart store
    this.homepageChart = this.store.select('homepageChart');
    this.chartService.getHomepageChart().subscribe(res => {
      this.store.dispatch({type: SET_HOMEPAGE_CHART, payload: res});
    })
  }

}
