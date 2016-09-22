import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ServiceHelpers } from '../../helpers';
// Models
import { Hscode, AnnualChartData, CountryTableData, AnnualTableData, AnnualTableFilter, filterSet } from '../../models';
// Charts and tables
import { ChartService } from '../../charts';
import { TableService, TableHelpers } from '../../tables';
// Reducer ACtions
import { SET_COUNTRY_CHART, RESET_COUNTRY_CHART } from '../../reducers/charts';
import { SET_ANNUAL_TABLE, RESET_ANNUAL_TABLE, RESET_TABLE_FILTER } from '../../reducers/tables';

@Component({
  selector: 'country-detail',
  templateUrl: './country-detail.html',
  styleUrls: ['./country-detail.scss']
})
export class CountryDetail implements OnInit {
  countryDetail: Observable<any>;
  countryChart: Observable<any>;
  annualTable: Observable<AnnualTableData>;
  tableFilter: Observable<any>;  
  tableType: string = "COUNTRIES";
  country: string;
  initialFilter: any = {year: 2016, type: 'Import', page: 1, pageLength: 10};

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute,
    private chartService: ChartService,
    private sH: ServiceHelpers,
    private tableService: TableService,
    private tH: TableHelpers
  ) {  }

  ngOnInit() {
    this.countryDetail = this.store.select('countryDetail');
    this.countryChart = this.store.select('countryChart');
    this.annualTable = this.store.select('annualTable');
    this.tableFilter = this.store.select('annualTableFilter');

    this.route.params.subscribe(params => {
      this.country = params['country'];
      // TABLE
      this.store.dispatch({type: RESET_TABLE_FILTER});
      // Chart
      this.chartService.getCountryChart(this.country)
          .subscribe(res => {
            this.store.dispatch({type: SET_COUNTRY_CHART, payload: res});
          });
      this.tableService.getCountryTable(this.country, this.initialFilter)
          .subscribe(res => {
            this.store.dispatch({ type: SET_ANNUAL_TABLE, payload: {table: res.table, pages: res.pages} });            
          })
    });

    this.tableFilter.subscribe(filter => {
      this.tableService.getCountryTable(this.country, filter)
        .subscribe(res => {
          this.store.dispatch({ type: SET_ANNUAL_TABLE, payload: {table: res.table, pages: res.pages} });
        });
    });

  }

  setFilter(change: filterSet) {
    let dispatch = this.tH.setFilter(change);
    this.store.dispatch(dispatch);
  }

}


