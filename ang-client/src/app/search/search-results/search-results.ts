import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.html',
  styleUrls: ['./search-results.scss']
})
export class SearchResults implements OnInit {
  @Input() searchResults;

  constructor() { }

  ngOnInit() {
  }

}
