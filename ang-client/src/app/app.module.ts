import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

import { App } from './app';
import { routing, appRoutingProviders } from './app.routes';
// Layout Components
import { Header } from './layout';
import { Footer } from './layout';
import { Home } from './home';

@NgModule({
  declarations: [
    App,
    Header, Footer,
    Home
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    DropdownModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [App]
})
export class AppModule { }
