export interface AnnualTableFilter {
  type: string;
  year: number;
  page: number;
  pageLength: number;
}

export interface filterSet {
  filter: string;
  value: any;
}