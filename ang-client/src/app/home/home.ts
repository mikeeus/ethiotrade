import { Component, OnInit } from '@angular/core';
import { ChartService, HomepageChart } from '../charts';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AnnualChart } from '../models';
import { YEARS } from '../shared';

@Component({
  selector: 'home',
  templateUrl: 'home.html',
  styleUrls: ['home.scss']
})
export class Home implements OnInit {
  homepageChart: Observable<AnnualChart>;

  constructor(
    private chartService: ChartService,
    private store: Store<any>
  ) { }

  ngOnInit() { 
    // Initialize and subscribe to homepageChart store
    this.homepageChart = this.store.select('homepageChart');
    this.chartService.getHomepageChart().subscribe(res => {
      this.store.dispatch({type: 'LOAD_HOMEPAGE_CHART', payload: res});
    })
  }

}
