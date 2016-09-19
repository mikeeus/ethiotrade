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
import { HomepageChartReducer, HscodeChartReducer, SearchResultsReducer, HscodeDetailReducer, RelatedCodesReducer } from './reducers';
// Search
import { SearchService, Searchbar, SearchResults } from './search';
// Charts
import { ChartService, HomepageChart, HscodeChart } from './charts';
// Hscode
import { HscodeDetail, HscodeService, TaxRates, RelatedCodes } from './hscode';

@NgModule({
  declarations: [
    App, Home,
    Header, Footer,
    Searchbar, SearchResults,
    HomepageChart, HscodeChart,
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
      relatedCodes: RelatedCodesReducer
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
    HscodeService
  ],
  bootstrap: [App]
})
export class AppModule { }
