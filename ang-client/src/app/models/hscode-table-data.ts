import { Hscode } from './hscode';
import { AnnualTableFilter } from './annual-table-filter';

export interface HscodeTableData {
  table: Hscode[];
  pages: number;
  filter: AnnualTableFilter;
}