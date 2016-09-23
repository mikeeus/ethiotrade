import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.html',
  styleUrls: ['./search-results.scss']
})
export class SearchResults implements OnInit {
  @Input() searchResults;
  @Output() onSelect = new EventEmitter<number>();
  selectedCode: number;
  constructor() { }

  ngOnInit() {
  }

}
