import { Component, OnInit } from '@angular/core';
import { DropdownDirective, CollapseDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'Header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss']
})
export class Header implements OnInit {
  constructor() { }
  
  // Dropdown attr and functions 
  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};
  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
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

  countries: string[] = [
    'Canada',
    'Ethiopia',
    'United States',
    'Democratic Republic of Korea, The'
  ];
  years: string[] =  ['2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998', '1997'];
  showYearsDropdown: boolean = false;

  ngOnInit() { }

}