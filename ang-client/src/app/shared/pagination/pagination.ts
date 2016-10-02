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

  // pagesBefore 2
  // 

  setPageList(pageList){
    let cPage =  this.currentPage;
    let max = pageList.length
    if(cPage < 3 || max < 6){
      return pageList.slice(0,5);      
    } else if(cPage > 2 && cPage < (max - 1)){
      return pageList.slice(cPage - 3, cPage + 2);      
    } else if (max > 5 && cPage > (max - 3)) {
      return pageList.slice((max - 5), max);
    }
  }

  showFirstBtn(pageList){
    if (pageList.length > 4 && this.currentPage > 3) {
      return true;
    }
    return false;
  }
  showLastBtn(pageList){
    if(pageList.length > 5 && this.currentPage < (pageList.length - 2)) {
      return true;
    }
    return false;
  }

  goToLastPage(){
    this.changePage.emit(this.pageList.length);    
  }

}
