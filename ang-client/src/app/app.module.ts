import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { App } from './app';
import { routing, appRoutingProviders } from './app.routes';
// Layout Components
import {Header} from './layout';

import {Home} from './home';

@NgModule({
  declarations: [
    App,
    Header,
    Home
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [App]
})
export class AppModule { }
