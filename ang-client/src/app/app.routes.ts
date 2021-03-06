import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home, About } from './static-pages';
import { HscodeDetail } from './hscode';
import { CountryDetail } from './country';

const appRoutes: Routes = [
  { path: 'home', component: Home, data: { breadcrumb: 'home'} },
  { path: 'about', component: About, data: { breadcrumb: 'about'} },  
  // Hscode Detail path
  { path: 'hscodes/:code', component: HscodeDetail, 
    data: { breadcrumb: 'hscode' } },
  // Country Detail path
  { path: 'countries/:country', component: CountryDetail, 
    data: { breadcrumb: 'country' } },
  // Annual Summaries path

  // Homepage
  { path: '', component: Home, data: { breadcrumb: 'home' } },  
  // Can also redirect to 'Page not found' component
  { path: '**', component: Home, data: { breadcrumb: 'home' } }
];

// Providers
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
