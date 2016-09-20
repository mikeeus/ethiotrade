import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HscodeParams, AnnualTableFilter } from '../../models';

@Component({
  selector: 'annual-table-settings',
  templateUrl: './annual-table-settings.html',
  styleUrls: ['./annual-table-settings.scss']
})
export class AnnualTableSettings implements OnInit {
  // Params are input
  @Input() tableData;
  // New params are output  
  @Output() onSetFilter: EventEmitter<changeFilter> = new EventEmitter<changeFilter>();

  constructor() { }

  ngOnInit() {
  }

  setFilter(filter, value) {
    let change = {filter: filter, value: value}
    this.onSetFilter.emit(change);
  }

}

interface changeFilter {
  filter: string;
  value: string;
}