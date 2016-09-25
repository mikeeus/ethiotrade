export interface TopTenData {
  chart: { 
    data: number[];
    label: string;
  };
  labels: string[];
  table: TopTenTableData[];
}
export interface TopTenTableData {
  country: string;
  value: number;
}