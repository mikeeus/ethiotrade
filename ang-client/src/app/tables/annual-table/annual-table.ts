import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { filterSet } from '../../models';

@Component({
  selector: 'annual-table',
  templateUrl: './annual-table.html',
  styleUrls: ['./annual-table.scss']
})
export class AnnualTable implements OnInit {
  @Input() annualTable;
  @Input() tableType;
  @Input() filter;
  @Output() setFilter: EventEmitter<filterSet> = new EventEmitter<filterSet>();

  constructor() { }

  ngOnInit() {
  }

  changePage(page){
    let change = {filter: 'PAGE', value: page};
    this.setFilter.emit(change);
  }

}
