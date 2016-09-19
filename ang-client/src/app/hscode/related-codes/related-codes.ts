import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Hscode } from '../../models';

@Component({
  selector: 'related-codes',
  templateUrl: './related-codes.html',
  styleUrls: ['./related-codes.scss']
})
export class RelatedCodes implements OnInit {
  @Input() relatedCodes: Hscode[];
  @Output() onSelect: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
