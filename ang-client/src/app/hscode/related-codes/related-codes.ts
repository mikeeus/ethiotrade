import { Component, Input, OnInit } from '@angular/core';
import { HscodeData } from '../../models';

@Component({
  selector: 'related-codes',
  templateUrl: './related-codes.html',
  styleUrls: ['./related-codes.scss']
})
export class RelatedCodes implements OnInit {
  @Input() relatedCodes: HscodeData[];

  constructor() { }

  ngOnInit() {
  }

}
