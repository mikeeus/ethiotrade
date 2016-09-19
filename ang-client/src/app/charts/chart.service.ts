import { Injectable } from '@angular/core';
import { Http, Response, ResponseOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HscodeData, CountryData } from '../models';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ServiceHelpers } from '../helpers';

@Injectable()
export class ChartService {
  homepageUrl: string = 'api/charts/homepage';
  hscodesUrl: string = '/api/charts/hscodes';
  countriesUrl: string = '/api/charts/countries';
  
  constructor(
    private http: Http,
    private sH: ServiceHelpers
  ) { }

  getHomepageChart(): Observable<any> {
    return this.http.get(this.homepageUrl)
      .map(this.sH.getJson)
      .catch(this.sH.handleError)      
  }
  
  getHscodeChart(code: number): Observable<HscodeData> {
    return this.http.get(`${this.hscodesUrl}/${code}`)
      .map(this.sH.getJson)
      .catch(this.sH.handleError)
  }

  getCountryChart(country: string): Observable<CountryData> {
    return this.http.get(`${this.countriesUrl}/${country}`)
      .map(this.sH.getJson)
      .catch(this.sH.handleError)
  }

}
