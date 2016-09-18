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
import { HomepageChartReducer, SearchResultsReducer, HscodeDetailReducer } from './reducers';
// Search
import { SearchService, Searchbar, SearchResults } from './search';
// Charts
import { ChartService, HomepageChart } from './charts';
// Hscode
import { HscodeDetail, HscodeService } from './hscode';

@NgModule({
  declarations: [
    App,
    Header, Footer,
    Searchbar,
    Home,
    HomepageChart,
    SearchResults,
    HscodeDetail
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
      hscodeDetail: HscodeDetailReducer
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
