import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { HscodeDetail } from './hscode';
import { CountryDetail } from './country';
import { YearSummary } from './year';

const appRoutes: Routes = [
  { path: 'home', component: Home, data: { breadcrumb: 'home'} },
  // Hscode Detail path
  { path: 'hscodes/:code', component: HscodeDetail, 
    data: { breadcrumb: 'hscode' } },
  // Country Detail path
  { path: 'countries/:country', component: CountryDetail, 
    data: { breadcrumb: 'country' } },
  // Year Summary path
  { path: 'years/:year', component: YearSummary, 
    data: { breadcrumb: 'year' } },
  // Homepage
  { path: '', component: Home, data: { breadcrumb: 'home' } },  
  // Can also redirect to 'Page not found' component
  { path: '**', component: Home, data: { breadcrumb: 'home' } }
];

// Providers
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
