import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tax-rates',
  templateUrl: './tax-rates.html',
  styleUrls: ['./tax-rates.scss']
})
export class TaxRates implements OnInit {
  @Input() taxRates;

  constructor() { }

  ngOnInit() {
  }

}
