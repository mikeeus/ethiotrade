import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Vendors
import { DropdownModule, CollapseModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { App } from './app';
import { routing, appRoutingProviders } from './app.routes';
// Layout Components
import { Header } from './layout';
import { Footer } from './layout';
import { Home } from './home';
// App Components
import { Search } from './search';

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
  providers: [appRoutingProviders],
  bootstrap: [App]
})
export class AppModule { }
