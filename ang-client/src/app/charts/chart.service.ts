import { Injectable } from '@angular/core';
import { Http, Response, ResponseOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HscodeDetail } from '../models';

@Injectable()
export class ChartService {
  hscodeUrl:string = '/api/charts/hscodes/'
  
  constructor(
    private http: Http
  ) { }

  getHscode(code: number): Observable<HscodeDetail> {
    return this.http.get(`${this.hscodeUrl}/${code}`)
        // check for errors
        // .map()
        // catch errors
        .map(res => this.getJson(res))
        // getJSon
  }

  private getJson(response) {
    return response.json();
  }

  getCountry() {

  }

  // Should get both chart and table data
  getYear() {

  }

}
