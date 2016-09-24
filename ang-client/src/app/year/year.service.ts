import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ServiceHelpers } from '../helpers';
import { YearChartsTablesData, YearSummary } from '../models';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class YearService {
  yearsUrl: string = '/api/years';

  constructor(
    private http: Http,
    private sH: ServiceHelpers
  ) { }

  getYearsSummary(year: number): Observable<YearSummary> {
    return this.http.get(`${this.yearsUrl}/${year}/summary`)
        .map(this.sH.getJson)
        .catch(this.sH.handleError);
  }

  getYearsChartsTables(year: number): Observable<YearChartsTablesData> {
    return this.http.get(`${this.yearsUrl}/${year}`)
        .map(this.sH.getJson)
        .catch(this.sH.handleError);
  }

}
