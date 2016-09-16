import { Component, OnInit } from '@angular/core';
import { DropdownDirective, CollapseDirective } from 'ng2-bootstrap/ng2-bootstrap';

import { YEARS, COUNTRIES } from '../../shared';

@Component({
  selector: 'Header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss']
})
export class Header implements OnInit {
  countries: string[] = COUNTRIES; 
  years: string[] = YEARS;

  constructor() { }
  
  // Dropdown attr and functions 
  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};
  // Optional event handler
  public toggled(open:boolean):void {
    // console.log('Dropdown is now: ', open);
  }
  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  // Collapse attr and functions
  public isCollapsed: boolean = true;
  public collapsed(event:any):void {
    console.log(event);
  }
  public expanded(event:any):void {
    console.log(event);
  }

  // Search Component
  onSearch(term) {
    console.log(term);
  }

  ngOnInit() { }

}
