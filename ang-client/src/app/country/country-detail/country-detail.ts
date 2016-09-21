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

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute,
    private chartService: ChartService,
    private sH: ServiceHelpers,
    private tableService: TableService,
    private tH: TableHelpers
  ) {     
    this.countryDetail = this.store.select('countryDetail');
    this.annualTable = this.store.select('annualTable');
    this.countryChart = this.store.select('countryChart');
    this.tableFilter = this.store.select('annualTableFilter');
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let country = params['country'];
      // Reset stores
      this.store.dispatch({type: RESET_COUNTRY_CHART});      
      this.store.dispatch({type: RESET_ANNUAL_TABLE});
      this.store.dispatch({type: RESET_TABLE_FILTER});      
      // Chart
      this.chartService.getCountryChart(country).subscribe(res => {
        this.store.dispatch({type: SET_COUNTRY_CHART, payload: res});
      });
      this.tableService.getCountryTable(country,{year: 2016, type: 'Import', page: 1, pageLength: 10})
          .subscribe(res => console.log(res));
      // TABLE    
      this.tableFilter.subscribe(filter => {
        this.tableService.getCountryTable(country, filter)
          .subscribe(res => {
            this.store.dispatch({ type: SET_ANNUAL_TABLE, payload: {table: res.table, pages: res.pages} });
          });
      });

    });

  }

  setFilter(change: filterSet) {
    let dispatch = this.tH.setFilter(change);
    this.store.dispatch(dispatch);
  }

}
