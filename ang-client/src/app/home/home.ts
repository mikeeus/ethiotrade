import { Component, OnInit } from '@angular/core';
import { ChartService, HomepageChart } from '../charts';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AnnualChart } from '../models';

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
    this.homepageChart = this.store.select('homepageChart');
    this.chartService.getHomepage().subscribe(res => {
      this.store.dispatch({type: 'LOAD_HOMEPAGE_CHART', payload: res})
    })
  }
}