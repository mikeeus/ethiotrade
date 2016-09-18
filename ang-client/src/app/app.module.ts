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
import { HomepageChartReducer } from './reducers';
// Search
import { Search } from './search';
import { SearchService } from './search';
// Charts
import { ChartService } from './charts';
import { HomepageChart } from './charts';

@NgModule({
  declarations: [
    App,
    Header, Footer,
    Search,
    Home,
    HomepageChart
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    StoreModule.provideStore({ homepageChart: HomepageChartReducer }),
    // ng2-bootstrap/ng2-charts modules
    DropdownModule,
    CollapseModule,
    ChartsModule
  ],
  providers: [
    appRoutingProviders,
    SearchService,
    ChartService,
    ServiceHelpers
  ],
  bootstrap: [App]
})
export class AppModule { }
