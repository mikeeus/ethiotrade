import { Component, OnInit } from '@angular/core';
import {DropdownDirective, CollapseDirective} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'Header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss']
})
export class Header implements OnInit {
  constructor() { }

  public isCollapsed: boolean;

  ngOnInit() { }

}