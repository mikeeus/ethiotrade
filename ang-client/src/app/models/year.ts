export interface YearSummaryData {
  totalImports: number;
  totalExports: number;
  countriesImportedFrom: number;
  countriesExportedTo: number;
}

export interface YearChartsTablesData {
  topTenCountriesImport: any[];
  topTenCountriesExport: any[];
  topTenHscodesImport: any[];
  topTenHscodesExport: any[];
}