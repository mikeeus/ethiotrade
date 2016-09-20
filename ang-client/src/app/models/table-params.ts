import { AnnualTableFilter } from './annual-table-filter';

export interface HscodeParams {
  code: number;
  filter: AnnualTableFilter;
}

export interface CountryParams {
  country: string; 
  filter: AnnualTableFilter;
}

