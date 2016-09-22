import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropdownDirective, CollapseDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SearchService } from '../../search';
import { YEARS_DESC, COUNTRIES } from '../../shared';
import { Hscode } from '../../models';

@Component({
  selector: 'Header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss']
})
export class Header implements OnInit {
  countries: string[] = COUNTRIES; 
  years: string[] = YEARS_DESC;
  searchResults: Observable<Hscode[]>;
  showSearchResults: boolean = false;

  constructor(
    private store: Store<any>,
    private searchService: SearchService,
    private router: Router
  ) { }
  
  ngOnInit() {
    this.searchResults = this.store.select('searchResults');
  }

  // Search Component
  onSearch(term) {
    if( term.length > 2) {
      console.log(term);
      this.showSearchResults = true;
      this.searchService.search(term).subscribe(res => {
        this.store.dispatch({type: 'GET_RESULTS', payload: res})
      });
    } else if (term.length < 3) {
      this.showSearchResults = false;
    }
  }
  showResults(status) {
    this.showSearchResults = status;
  }
  onSelectSearchResult(code: number){
    this.router.navigate(['/hscodes/', code]);
  }

  // Not currently used
  goTo(country){
    this.router.navigate(['/countries/', country]);
    this.store.dispatch({type: 'RESET_ANNUAL_TABLE'});
    this.store.dispatch({type: 'RESET_TABLE_FILTER'});    
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
    // console.log(event);
  }
  public expanded(event:any):void {
    // console.log(event);
  }

}
