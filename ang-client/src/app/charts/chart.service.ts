import { Injectable } from '@angular/core';
import { Http, Response, ResponseOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HscodeDetail } from '../models';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ServiceHelpers } from '../helpers';

@Injectable()
export class ChartService {
  hscodeUrl:string = '/api/charts/hscodes/'
  
  constructor(
    private http: Http,
    private sH: ServiceHelpers
  ) { }

  getHscode(code: number): Observable<HscodeDetail> {
    return this.http.get(`${this.hscodeUrl}/${code}`)
        .map(this.sH.getJson)
        .catch(this.sH.handleError)
  }



  getCountry() {

  }

  // Should get both chart and table data
  getYear() {

  }

}
