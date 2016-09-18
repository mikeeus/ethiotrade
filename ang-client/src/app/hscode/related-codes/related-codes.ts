import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Hscode } from '../../models';

@Component({
  selector: 'related-codes',
  templateUrl: './related-codes.html',
  styleUrls: ['./related-codes.scss']
})
export class RelatedCodes implements OnInit {
  @Input() relatedCodes: Hscode[];
  @Input() currentHscode: Hscode;
  @Output() onSelect: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  
  currentCode(code){
    if(code == this.currentHscode.code){
      return "#b2d0e8";
    }
    return "";
  }

}
