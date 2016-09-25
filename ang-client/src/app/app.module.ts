import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routes';
// Vendors
import { DropdownModule, CollapseModule, TabsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ChartsModule } from 'ng2-charts/ng2-charts';
// App Components
import { App } from './app';
import { Header, Footer } from './layout';
import { Home } from './home';
// Helpers
import { ServiceHelpers } from './helpers';
// State Management
import { StoreModule } from '@ngrx/store';
import { HomepageChartReducer, HscodeChartReducer, SearchResultsReducer, 
  CountryStatsReducer, CountryChartReducer, AnnualTableReducer,
  HscodeDetailReducer, RelatedCodesReducer, 
  YearChartsTablesReducer, YearSummaryReducer,
  AnnualTableFilterReducer } from './reducers';
// Search
import { SearchService, Searchbar, SearchResults } from './search';
// Charts
import { ChartService, AnnualChart, TopTenChart } from './charts';
// Tables
import { AnnualTable, TableService, AnnualTableSettings, TableHelpers } from './tables';
// Hscode
import { HscodeDetail, HscodeService, TaxRates, RelatedCodes } from './hscode';
import { CountryDetail, CountryStats, CountryService } from './country';
import { Pagination } from './shared';
// Year
import { YearSummary, YearService } from './year';

@NgModule({
  declarations: [
    App, Home,
    Header, Footer,
    Searchbar, SearchResults,
    AnnualChart, TopTenChart,
    AnnualTable, AnnualTableSettings, 
    CountryDetail, CountryStats,
    HscodeDetail, RelatedCodes, TaxRates,
    YearSummary, 
    Pagination
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    StoreModule.provideStore({ 
      homepageChart: HomepageChartReducer,
      searchResults: SearchResultsReducer,
      hscodeDetail: HscodeDetailReducer,
      relatedCodes: RelatedCodesReducer,
      hscodeChart: HscodeChartReducer,
      yearChartsTables: YearChartsTablesReducer,
      yearSummary: YearSummaryReducer,
      countryStats: CountryStatsReducer,
      countryChart: CountryChartReducer,
      annualTable: AnnualTableReducer,
      annualTableFilter: AnnualTableFilterReducer
    }),
    // ng2-bootstrap/ng2-charts modules
    DropdownModule,
    CollapseModule,
    ChartsModule,
    TabsModule
  ],
  providers: [
    appRoutingProviders,
    ServiceHelpers,
    SearchService,
    HscodeService,
    CountryService,
    YearService,
    ChartService,
    TableService,
    TableHelpers
  ],
  bootstrap: [App]
})
export class AppModule { }
