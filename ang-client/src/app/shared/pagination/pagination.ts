import { Component,Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.html',
  styleUrls: ['./pagination.scss']
})
export class Pagination implements OnInit {
  @Input() pageList: number[];
  @Input() currentPage: number;
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onChangePage(page){
    this.changePage.emit(page);
  }

}
