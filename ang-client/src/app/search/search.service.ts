import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ServiceHelpers } from '../helpers';

@Injectable()
export class SearchService {
  searchUrl: string = '/api/hscodes/search/'

  constructor(
    private http: Http,
    private sH: ServiceHelpers
  ) { }

  search(term): Observable<any[]> {
    return this.http.get(this.searchUrl + term)
        .map(this.sH.getJson)
        .catch(this.sH.handleError)
  }


}
