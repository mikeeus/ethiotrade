import { Component, OnInit } from '@angular/core';
import { DropdownDirective, CollapseDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SearchService } from '../../search';
import { YEARS, COUNTRIES } from '../../shared';
import { Hscode } from '../../models';

@Component({
  selector: 'Header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss']
})
export class Header implements OnInit {
  countries: string[] = COUNTRIES; 
  years: string[] = YEARS;
  searchResults: Observable<Hscode[]>;
  showSearchResults: boolean = false;

  constructor(
    private store: Store<any>,
    private searchService: SearchService
  ) { }
  
  ngOnInit() {
    this.searchResults = this.store.select('searchResults');
  }

  // Search Component
  onSearch(term) {
    if( term.length > 2) {
      console.log(term);
      this.searchService.search(term).subscribe(res => {
        console.log(res);
        this.store.dispatch({type: 'GET_RESULTS', payload: res})
      });
    }
  }
  showResults(status) {
    this.showSearchResults = status;
    console.log(status);
  }

  // Dropdown attr and functions 
  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};
  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
  public toggled(open:boolean):void {
  }
  // Collapse attr and functions
  public isCollapsed: boolean = true;
  public collapsed(event:any):void {
    console.log(event);
  }
  public expanded(event:any):void {
    console.log(event);
  }

}
