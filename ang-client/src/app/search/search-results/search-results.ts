import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hscode } from '../../models';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.html',
  styleUrls: ['./search-results.scss']
})
export class SearchResults implements OnInit {
  @Input() searchResults;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
  }

}
