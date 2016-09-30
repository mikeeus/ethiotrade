import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'table-ui',
  templateUrl: './table-ui.html',
  styleUrls: ['./table-ui.scss']
})
export class TableUi implements OnInit {
  @Input() recordType: string;
  @Input() tableType: string;
  @Input() tableLength: number;
  @Input() tableData: any[];
  @Output() selectRow: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(value){
    this.selectRow.emit(value);
  }

}
