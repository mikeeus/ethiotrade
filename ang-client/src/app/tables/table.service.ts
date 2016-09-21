import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ServiceHelpers } from '../helpers';
import { HscodeParams, CountryParams, AnnualTableFilter } from '../models';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TableService {
  // /api/hscodes/:code/tables/:type/:year/:page/:pageLength
  // /api/countries/:country/tables/:type/:year/:page/:pageLength  
  private hscodeUrl: string = '/api/tables/hscodes';
  private countryUrl: string = '/api/tables/countries';  

  constructor(
    private http: Http,
    private sH: ServiceHelpers
  ) { }

  getHscodeTable(code, filter): Observable<any> {
    let path = this.getPath(this.hscodeUrl, code, filter);
    return this.http.get(path)
        .map(this.sH.getJson)
        .catch(this.sH.handleError)
  }
  getCountryTable(country, filter): Observable<any> {
    let path = this.getPath(this.countryUrl, country, filter);
    return this.http.get(path)
        .map(this.sH.getJson)
        .catch(this.sH.handleError)
  }

  // Get path
  getPath(baseUrl:string, identifier, filter) {
    return `${baseUrl}/${identifier}/${filter.type}/${filter.year}/${filter.page}/${filter.pageLength}`
  }
}
