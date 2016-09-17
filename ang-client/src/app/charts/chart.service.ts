import { Injectable } from '@angular/core';
import { Http, Response, ResponseOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HscodeDetail, CountryDetail } from '../models';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ServiceHelpers } from '../helpers';

@Injectable()
export class ChartService {
  homepageUrl: string = 'api/charts/homepage';
  hscodesUrl: string = '/api/charts/hscodes/';
  countriesUrl: string = '/api/charts/countries/';
  
  constructor(
    private http: Http,
    private sH: ServiceHelpers
  ) { }

  getHomepage(): Observable<any> {
    return this.http.get(this.homepageUrl)
      .map(this.sH.getJson)
      .catch(this.sH.handleError)      
  }
  
  getHscode(code: number): Observable<HscodeDetail> {
    return this.http.get(`${this.hscodesUrl}/${code}`)
      .map(this.sH.getJson)
      .catch(this.sH.handleError)
  }

  getCountry(country: string): Observable<CountryDetail> {
    return this.http.get(`${this.countriesUrl}/${country}`)
      .map(this.sH.getJson)
      .catch(this.sH.handleError)
  }

  // Should get both chart and table data
  // getYear() {

  // }

}
