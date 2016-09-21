import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
// Models
import { Hscode, AnnualChartData, AnnualTableData, HscodeParams, AnnualTableFilter, filterSet } from '../../models';
// Hscode, Chart and Table
import { HscodeService } from '../hscode.service';
import { AnnualChart, ChartService } from '../../charts';
import { TableService, TableHelpers } from '../../tables';
// Reducer actions
import { GET_HSCODE, GET_RELATED_CODES } from '../../reducers/hscode-detail';
import { SET_HSCODE_CHART, RESET_HSCODE_CHART } from '../../reducers/charts';
import { AnnualTableReducer, RESET_TABLE_FILTER, RESET_ANNUAL_TABLE, SET_ANNUAL_TABLE } from '../../reducers/tables';

@Component({
  selector: 'hscode-detail',
  templateUrl: './hscode-detail.html',
  styleUrls: ['./hscode-detail.scss']
})
export class HscodeDetail implements OnInit {
  hscodeDetail: Observable<Hscode>;
  relatedCodes: Observable<Hscode[]>; 
  hscodeChart: Observable<AnnualChartData>;
  annualTable: Observable<AnnualTableData>;
  tableFilter: Observable<AnnualTableFilter>;
  tableType: string = 'HSCODES';
  
  code: number;
  description: string;
  hsParams;
  
  constructor(
    private store: Store<any>,
    private hscodeService: HscodeService,
    private chartService: ChartService,
    private tableService: TableService,
    private tH: TableHelpers,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.hscodeDetail = this.store.select('hscodeDetail');
    this.relatedCodes = this.store.select('relatedCodes');
    this.hscodeChart = this.store.select('hscodeChart');
    this.annualTable = this.store.select('annualTable');
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
      // CHART
      this.chartService.getHscodeChart(code)
          .subscribe(res => {
            this.store.dispatch({type: SET_HSCODE_CHART, payload: res})
          });
      // Table
      this.store.dispatch({type: RESET_ANNUAL_TABLE});   
      this.store.dispatch({type: RESET_TABLE_FILTER});
      this.tableFilter.subscribe(filter => {
        this.tableService.getHscodeTable(code, filter)
          .subscribe(res => {
            this.store.dispatch({ type: SET_ANNUAL_TABLE, payload: {table: res.table, pages: res.pages} });
          });
      });

    });
  }

  onSelect(code: number) {
    this.router.navigate(['/hscodes/', code]);
  }

  setFilter(change: filterSet) {
    let dispatch = this.tH.setFilter(change);
    this.store.dispatch(dispatch);
  }

}
