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
import { Search } from './search';
// Services
import { ChartService } from './charts';
// Helpers
import { ServiceHelpers } from './helpers';
// State Management
import { StoreModule } from '@ngrx/store';
import { HomepageChartReducer } from './reducers';
import { HomepageChart } from './charts/homepage/homepage';

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
    ChartService,
    ServiceHelpers
  ],
  bootstrap: [App]
})
export class AppModule { }
