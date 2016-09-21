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
  pageList: number[];

  constructor() { }

  ngOnInit() {
    this.setPages(this.filter.page);
  }

  changePage(page){
    let change = {filter: 'PAGE', value: page};
    this.setFilter.emit(change);
    this.setPages(page);
  }

  setPages(page){
    console.log('page: ', page);
    if(page > 2) {
      this.pageList = this.annualTable.pages.slice((page - 3), (page + 2));
      console.log('page > 2 : ', this.annualTable.pages.slice((page - 3), (page + 2)));
    } else if(page < 3) {
      this.pageList = this.annualTable.pages.slice(0, 5);
      console.log('page < 3 : ', this.annualTable.pages.slice(0, 5));
      console.log('annualTable ', this.annualTable);
      console.log('pages ', this.annualTable.pages);      
    }
  }
}
