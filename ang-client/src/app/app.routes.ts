import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { HscodeDetail } from './hscode';

const appRoutes: Routes = [
  { path: 'home', component: Home, data: { breadcrumb: 'home'} },
  { path: 'hscodes/:code', component: HscodeDetail, data: { breadcrumb: 'hscode'} },
  // Annual Summaries path
  // Hscode Detail path
  // Country Detail path

  // Homepage
  { path: '', component: Home, data: { breadcrumb: 'home' } },  
  // Can also redirect to 'Page not found' component
  { path: '**', component: Home, data: { breadcrumb: 'home' } }
];

// Providers
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
