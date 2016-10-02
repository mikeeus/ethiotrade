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
import { Home } from './static-pages';
// Helpers
import { ServiceHelpers } from './helpers';
// State Management
import { StoreModule } from '@ngrx/store';
import { HomepageChartReducer, HscodeChartReducer, SearchResultsReducer, 
  CountryStatsReducer, CountryChartReducer, AnnualTableReducer,
  HscodeDetailReducer, RelatedCodesReducer, 
  AnnualTableFilterReducer } from './reducers';
// Search
import { SearchService, Searchbar, SearchResults } from './search';
// Charts
import { ChartService, AnnualChart } from './charts';
// Tables
import { AnnualTable, TableService, AnnualTableSettings, TableHelpers, TableUi } from './tables';
// Hscode
import { HscodeDetail, HscodeService, TaxRates, RelatedCodes } from './hscode';
import { CountryDetail, CountryStats, CountryService } from './country';
import { Pagination } from './shared';

@NgModule({
  declarations: [
    App, Home,
    Header, Footer,
    Searchbar, SearchResults,
    AnnualChart,
    AnnualTable, AnnualTableSettings, TableUi,
    CountryDetail, CountryStats,
    HscodeDetail, RelatedCodes, TaxRates, 
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
    ChartService,
    TableService,
    TableHelpers
  ],
  bootstrap: [App]
})
export class AppModule { }
