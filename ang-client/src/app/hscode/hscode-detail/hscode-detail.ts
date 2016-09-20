import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
// Hscode, Chart and Table
import { Hscode, AnnualChartData, HscodeTableData, HscodeParams, AnnualTableFilter } from '../../models';
import { HscodeService } from '../hscode.service';
import { AnnualChart, ChartService } from '../../charts';
import { TableService } from '../../tables';
// Reducer actions
import { GET_HSCODE, GET_RELATED_CODES } from '../../reducers/hscode-detail';
import { LOAD_HSCODE_CHART } from '../../reducers/charts';
import { SET_HSCODE_TABLE, RESET_HSCODE_TABLE,
  SET_TABLE_TYPE, SET_TABLE_YEAR, SET_TABLE_PAGE, SET_TABLE_PAGE_LENGTH, RESET_TABLE_FILTER } from '../../reducers/tables';

@Component({
  selector: 'hscode-detail',
  templateUrl: './hscode-detail.html',
  styleUrls: ['./hscode-detail.scss']
})
export class HscodeDetail implements OnInit {
  hscodeDetail: Observable<Hscode>;
  relatedCodes: Observable<Hscode[]>; 
  hscodeChart: Observable<AnnualChartData>;
  hscodeTable: Observable<HscodeTableData>;
  tableFilter: Observable<AnnualTableFilter>;

  code: number;
  description: string;
  
  constructor(
    private store: Store<any>,
    private hscodeService: HscodeService,
    private chartService: ChartService,
    private tableService: TableService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.hscodeDetail = this.store.select('hscodeDetail');
    this.relatedCodes = this.store.select('relatedCodes');
    this.hscodeChart = this.store.select('hscodeChart');
    this.hscodeTable = this.store.select('hscodeTable');
    this.tableFilter = this.store.select('annualTableFilter');
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let code = +params['code'];
      // Get hscodeDetail, relatedCodes
      this.hscodeService.getHscodeDetail(code)
          .subscribe(res => {
            this.store.dispatch({type: GET_HSCODE, payload: res.hscode});
            this.store.dispatch({type: GET_RELATED_CODES, payload: res.relatedCodes});
            this.code = res.hscode.code;
            this.description = res.hscode.description;
          });
      // Get hscodeChart
      this.chartService.getHscodeChart(code)
          .subscribe(res => {
            this.store.dispatch({type: LOAD_HSCODE_CHART, payload: res})
          });
      // Get table data
      // Reset filter, then call service to get table
      // Subscribe to the table filter, call service, dispatch table
      this.tableFilter.subscribe(filter => {
        let hsParams = {code: code, filter: filter}
        this.tableService.getHscodeTable(hsParams)
          .subscribe(res => {
            this.store.dispatch({ type: SET_HSCODE_TABLE, payload: {table: res.table, pages: res.pages} });
          });
      })
      this.store.dispatch({type: RESET_TABLE_FILTER});

    });
  }

  onSelect(code: number) {
    this.router.navigate(['/hscodes/', code]);
  }

}
