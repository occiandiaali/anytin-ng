import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    {path: 'all', loadComponent: () => import('./pages/tin-grid/tingrid.component').then(m => m.TinGridComponent)},
    {path: 'details/:id', loadComponent: () => import(`./pages/details/details.component`).then(m => m.DetailsComponent)},
   // {path: 'details/:item', loadComponent: () => import(`./pages/details/details.component`).then(m => m.DetailsComponent)},
    { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
    { path: 'profile', loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent) },
    { path: 'analytics', loadComponent: () => import('./pages/analytics/analytics.component').then(m => m.AnalyticsComponent) },
    { path: 'library', loadComponent: () => import('./pages/library/library.component').then(m => m.LibraryComponent) },
    { path: '**', redirectTo: 'all', pathMatch: 'full' }
];
