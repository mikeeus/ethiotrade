import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ServiceHelpers } from '../helpers';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CountryService {
  countryUrl: string = '/api/countries'

  constructor(
    private http: Http,
    private sH: ServiceHelpers
  ) { }

  getCountryStats(country: string): Observable<any> {
    return this.http.get(`${this.countryUrl}/${country}`)
      .map(this.sH.getJson)
      .catch(this.sH.handleError)
  }

}
