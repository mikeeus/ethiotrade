import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
// Services
import { CountryService } from '../country.service';
import { ServiceHelpers } from '../../helpers';
import { ChartService } from '../../charts';
import { TableService, TableHelpers } from '../../tables';
// Models
import { Hscode, AnnualChartData, CountryTableData, AnnualTableData, AnnualTableFilter, filterSet } from '../../models';
import { COUNTRIES } from '../../shared';
// Reducer ACtions
import { SET_COUNTRY_STATS, REMOVE_COUNTRY_STATS } from '../../reducers/country-detail';
import { SET_COUNTRY_CHART, RESET_COUNTRY_CHART } from '../../reducers/charts';
import { SET_ANNUAL_TABLE, RESET_ANNUAL_TABLE, RESET_TABLE_FILTER,
  initialAnnualTableFilter } from '../../reducers/tables';

@Component({
  selector: 'country-detail',
  templateUrl: './country-detail.html',
  styleUrls: ['./country-detail.scss']
})
export class CountryDetail implements OnInit, OnDestroy {
  countryStats: Observable<any>;
  countryChart: Observable<any>;
  annualTable: Observable<AnnualTableData>;
  tableFilter: Observable<any>;  
  tableType: string = "COUNTRIES";
  country: string;
  initialFilter: AnnualTableFilter = initialAnnualTableFilter;
  filterSub: any;
  routeSub: any;

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute,
    private router: Router,
    private countryService: CountryService,
    private chartService: ChartService,
    private sH: ServiceHelpers,
    private tableService: TableService,
    private tH: TableHelpers
  ) {  }

  ngOnInit() {
    this.countryStats = this.store.select('countryStats');
    this.countryChart = this.store.select('countryChart');
    this.annualTable = this.store.select('annualTable');
    this.tableFilter = this.store.select('annualTableFilter');

    this.routeSub = this.route.params.subscribe(params => {
      this.country = params['country'];

      // Check if valid country
      if(!this.contains(this.country)){
        this.router.navigate(['home']);
      }

      // Stats
      this.countryService.getCountryStats(this.country).subscribe(res => {
        this.store.dispatch({type: SET_COUNTRY_STATS, payload: res});
      })
      // Chart
      this.chartService.getCountryChart(this.country).subscribe(res => {
            this.store.dispatch({type: SET_COUNTRY_CHART, payload: res});
          });
      // TABLE
      this.store.dispatch({type: RESET_TABLE_FILTER});
      this.tableService.getCountryTable(this.country, this.initialFilter)
          .subscribe(res => {
            this.store.dispatch({ type: SET_ANNUAL_TABLE, payload: {table: res.table, pages: res.pages} });            
          });
    });
    // Subscribe to table filter
    this.filterSub = this.tableFilter.subscribe(filter => {
      this.tableService.getCountryTable(this.country, filter)
        .subscribe(res => {
          this.store.dispatch({ type: SET_ANNUAL_TABLE, payload: {table: res.table, pages: res.pages} });
        });
    });

  }

  ngOnDestroy() {
    this.filterSub.unsubscribe();
    this.routeSub.unsubscribe();
  }

  setFilter(change: filterSet) {
    let dispatch = this.tH.setFilter(change);
    this.store.dispatch(dispatch);
  }

  contains(country) {
    for (var i = 0; i < COUNTRIES.length; i++) {
      if (COUNTRIES[i] === country) {
        return true;
      }
    }
    return false;
  }
}


