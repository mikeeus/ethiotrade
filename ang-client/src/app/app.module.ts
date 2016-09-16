import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DropdownModule, CollapseModule } from 'ng2-bootstrap/ng2-bootstrap';

import { App } from './app';
import { routing, appRoutingProviders } from './app.routes';
// Layout Components
import { Header } from './layout';
import { Footer } from './layout';
import { Home } from './home';
// App Components
import { Search } from './search';

@NgModule({
  declarations: [
    App,
    Header, Footer,
    Search,
    Home
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    
    // ng2-bootstrap modules
    DropdownModule,
    CollapseModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [App]
})
export class AppModule { }
