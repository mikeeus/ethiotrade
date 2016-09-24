import { Component, Input, OnInit } from '@angular/core';
import { CountryStatsData } from '../../models';

@Component({
  selector: 'country-stats',
  templateUrl: './country-stats.html',
  styleUrls: ['./country-stats.scss']
})
export class CountryStats implements OnInit {
  @Input() countryStats: CountryStatsData;

  constructor() { }

  ngOnInit() {
  }

}
