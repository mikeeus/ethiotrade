import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'annual-table',
  templateUrl: './annual-table.html',
  styleUrls: ['./annual-table.scss']
})
export class AnnualTable implements OnInit {
  @Input() hscodeTable;

  constructor() { }

  ngOnInit() {
  }

}
