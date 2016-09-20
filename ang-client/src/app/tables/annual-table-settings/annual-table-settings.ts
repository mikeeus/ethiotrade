import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HscodeParams, AnnualTableFilter } from '../../models';
import { YEARS_DESC } from '../../shared';

@Component({
  selector: 'annual-table-settings',
  templateUrl: './annual-table-settings.html',
  styleUrls: ['./annual-table-settings.scss']
})
export class AnnualTableSettings implements OnInit {
  // Params are input
  @Input() filter;
  // New params are output  
  @Output() onSetFilter: EventEmitter<changeFilter> = new EventEmitter<changeFilter>();
  YEARS = YEARS_DESC;
  pageLengths: number[] = [10,20,50,100];
  types: string[] = ['Imports', 'Exports'];

  constructor() { }

  ngOnInit() {
  }

  setFilter(filter, value) {
    let change = {filter: filter, value: value}
    // this.onSetFilter.emit(change);
    console.log(change);
  }

}

interface changeFilter {
  filter: string;
  value: string;
}