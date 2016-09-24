import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YearService } from '../year.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { YearChartsTablesData, YearSummaryData } from '../../models';
import { SET_YEAR_SUMMARY, SET_YEAR_CHARTS_TABLES } from '../../reducers/year';

@Component({
  selector: 'year-summary',
  templateUrl: './year-summary.html',
  styleUrls: ['./year-summary.scss']
})
export class YearSummary implements OnInit, OnDestroy {
  yearSummary: Observable<YearSummaryData>;
  yearChartsTablesData: Observable<YearChartsTablesData>;
  routeSub: any;
  summarySub: any;
  chartsTablesSub: any;
  year: number;
  
  constructor(
    private store: Store<any>,
    private route: ActivatedRoute,
    private yearService: YearService
  ) { }

  ngOnInit() {
    this.yearSummary = this.store.select('yearSummary');
    this.yearChartsTablesData = this.store.select('yearChartsTablesData');

    this.routeSub = this.route.params.subscribe(params => {
      this.year = +params['year'];

      this.summarySub = this.yearService.getYearsSummary(this.year).subscribe(res => {
        this.store.dispatch({ type: SET_YEAR_SUMMARY, payload: res });
      });

      this.chartsTablesSub = this.yearService.getYearsChartsTables(this.year).subscribe( res => {
        this.store.dispatch({ type: SET_YEAR_CHARTS_TABLES, payload: res });
      });

    }); // this.routeSub
  } // ngOnInit

  // clear subscriptions to be safe
  ngOnDestroy(){
    this.routeSub.unsubscribe();
    this.summarySub.unsubscribe();
    this.chartsTablesSub.unsubscribe();
  }

}
