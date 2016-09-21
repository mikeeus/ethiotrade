import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ServiceHelpers } from '../../helpers';
// Models
import { Hscode, AnnualChartData, CountryTableData, CountryParams, AnnualTableFilter, filterSet } from '../../models';
// Charts and tables
import { ChartService } from '../../charts';
import { TableService, TableHelpers } from '../../tables';
// Reducer ACtions
import { SET_COUNTRY_CHART } from '../../reducers/charts';
import { SET_COUNTRY_TABLE, RESET_HSCODE_TABLE, RESET_TABLE_FILTER } from '../../reducers/tables';

@Component({
  selector: 'country-detail',
  templateUrl: './country-detail.html',
  styleUrls: ['./country-detail.scss']
})
export class CountryDetail implements OnInit {
  countryDetail: Observable<any>;
  countryChart: Observable<any>;
  countryTable: Observable<any>;
  tableFilter: Observable<any>;  
  tableType: string = "COUNTRIES";

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute,
    private chartService: ChartService,
    private sH: ServiceHelpers,
    private tableService: TableService,
    private tH: TableHelpers
  ) { }

  ngOnInit() {
    this.countryDetail = this.store.select('countryDetail');
    this.countryTable = this.store.select('countryTable');
    this.countryChart = this.store.select('countryChart');
    this.tableFilter = this.store.select('annualTableFilter');

    // Chart
    this.route.params.subscribe(params => {
      let country = params['country'];
      this.chartService.getCountryChart(country).subscribe(res => {
        this.store.dispatch({type: SET_COUNTRY_CHART, payload: res});
      });

      // TABLE
      this.store.dispatch({type: RESET_TABLE_FILTER});
      this.tableFilter.subscribe(filter => {
        this.tableService.getCountryTable(country, filter)
          .subscribe(res => {
            console.log(res);
            this.store.dispatch({ type: SET_COUNTRY_TABLE, payload: {table: res.table, pages: res.pages} });
          });
      });

    });

  }

  setFilter(change: filterSet) {
    let dispatch = this.tH.setFilter(change);
    this.store.dispatch(dispatch);
  }

}
