import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routes';
// Vendors
import { DropdownModule, CollapseModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ChartsModule } from 'ng2-charts/ng2-charts';
// App Components
import { App } from './app';
import { Header, Footer } from './layout';
import { Home } from './home';
// Helpers
import { ServiceHelpers } from './helpers';
// State Management
import { StoreModule } from '@ngrx/store';
import { HomepageChartReducer, HscodeChartReducer, SearchResultsReducer, HscodeDetailReducer, 
  RelatedCodesReducer, HscodeTableReducer } from './reducers';
// Search
import { SearchService, Searchbar, SearchResults } from './search';
// Charts
import { ChartService, AnnualChart } from './charts';
// Tables
import { AnnualTable, TableService, AnnualTableSettings } from './tables';
// Hscode
import { HscodeDetail, HscodeService, TaxRates, RelatedCodes } from './hscode';
import { CountryDetail } from './country';

@NgModule({
  declarations: [
    App, Home,
    Header, Footer,
    Searchbar, SearchResults,
    AnnualChart,
    AnnualTable, AnnualTableSettings, 
    CountryDetail,
    HscodeDetail, RelatedCodes, TaxRates 
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
      hscodeTable: HscodeTableReducer
    }),
    // ng2-bootstrap/ng2-charts modules
    DropdownModule,
    CollapseModule,
    ChartsModule
  ],
  providers: [
    appRoutingProviders,
    ServiceHelpers,
    SearchService,
    ChartService,
    HscodeService,
    TableService
  ],
  bootstrap: [App]
})
export class AppModule { }
