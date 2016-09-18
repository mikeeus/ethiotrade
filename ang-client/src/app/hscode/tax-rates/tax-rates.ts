import { Component, Input, OnInit } from '@angular/core';
import { Hscode } from '../../models';

@Component({
  selector: 'tax-rates',
  templateUrl: './tax-rates.html',
  styleUrls: ['./tax-rates.scss']
})
export class TaxRates implements OnInit {
  @Input() hscode: Hscode;

  constructor() { }

  ngOnInit() {
  }

}
