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

  setPageList(pageList){
    let cPage =  this.currentPage;
    let max = pageList.length
    if(cPage < 4 || max < 8){
      return pageList.slice(0,7);      
    } else if(cPage > 3 && cPage < (max - 3)){
      return pageList.slice(cPage - 4, cPage + 3);      
    } else if (max > 7 && cPage > (max - 4)) {
      return pageList.slice((max - 7), max);
    }
  }

  showFirstBtn(pageList){
    if (pageList.length > 7 && this.currentPage > 4) {
      return true;
    }
    return false;
  }
  showLastBtn(pageList){
    if(pageList.length > 7 && this.currentPage < (pageList.length - 3)) {
      return true;
    }
    return false;
  }

  goToLastPage(){
    this.changePage.emit(this.pageList.length);    
  }

}
