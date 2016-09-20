import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ServiceHelpers } from '../helpers';
import { HscodeParams, CountryParams } from '../models';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TableService {
  // /api/hscodes/:code/tables/:type/:year/:page/:pageLength
  // /api/countries/:country/tables/:type/:year/:page/:pageLength  
  private hscodeUrl: string = '/api/hscodes';
  private countryUrl: string = '/api/countries';  

  constructor(
    private http: Http,
    private sH: ServiceHelpers
  ) { }

  getHscodeTable(params): Observable<any> {
    let path = this.getHscodeUrl(params);
    return this.http.get(path)
        .map(this.sH.getJson)
        .catch(this.sH.handleError)
  }

  // getCountryTable(params: CountryParams): Observable<any> {
  //   let path = this.getCountryUrl(params);
  //   return this.http.get(path)
  //       .map(this.sH.getJson)
  //       .catch(this.sH.handleError)
  // }

  // Get params
  getHscodeUrl(params) {
    return `${this.hscodeUrl}/${params.code}/tables/${params.filter.type}/${params.filter.year}/${params.filter.page}/${params.filter.pageLength}`
  }
  // getCountryUrl(params: CountryParams) {
  //   return `${this.hscodeUrl}/${params.country}/tables/${params.type}/${params.year}/${params.page}/${params.pageLength}`
  // }
}
