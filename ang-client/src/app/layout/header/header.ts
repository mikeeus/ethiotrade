import { Component, OnInit } from '@angular/core';
import {DropdownDirective, CollapseDirective} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'Header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss']
})
export class Header implements OnInit {
  countries: string[] = [
    'Canada',
    'Ethiopia'
  ];
  years: string[] =  ['1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'];
  showYearsDropdown: boolean = false;

  constructor() { }

  public isCollapsed: boolean;

  ngOnInit() { }

}