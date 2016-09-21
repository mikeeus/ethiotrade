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
    this.countryChart = this.store.select('countryChart');

    // Chart
    this.route.params.subscribe(params => {
      let country = params['country'];
      this.chartService.getCountryChart(country).subscribe(res => {
        this.store.dispatch({type: SET_COUNTRY_CHART, payload: res});
      });
    });

  }

  setFilter(change: filterSet) {
    let dispatch = this.tH.setFilter(change);
    this.store.dispatch(dispatch);
  }

}
