import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HscodeParams, CountryParams } from '../../models';

@Component({
  selector: 'annual-table-settings',
  templateUrl: './annual-table-settings.html',
  styleUrls: ['./annual-table-settings.scss']
})
export class AnnualTableSettings implements OnInit {
  // Params are input
  @Input() initHscodeParams: HscodeParams;
  @Input() initCountryParams: CountryParams;
  // New params are output
  @Output() newHscodeParams: EventEmitter<HscodeParams> = new EventEmitter<HscodeParams>();  
  @Output() newCountryParams: EventEmitter<CountryParams> = new EventEmitter<CountryParams>();

  constructor() { }

  ngOnInit() {
  }

}
