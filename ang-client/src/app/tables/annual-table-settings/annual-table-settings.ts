import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HscodeParams, AnnualTableFilter, filterSet } from '../../models';
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
  @Output() setFilter: EventEmitter<filterSet> = new EventEmitter<filterSet>();
  YEARS = YEARS_DESC;
  pageLengths: number[] = [10,20,50,100];
  types: string[] = ['Imports', 'Exports'];

  constructor() { }

  ngOnInit() {
  }

  onSetFilter(filter, value) {
    let change = {filter: filter, value: value}
    this.setFilter.emit(change);
  }

}
