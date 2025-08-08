import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WatchedComponent } from './features/watched/watched.component';
import { WatchListComponent } from './features/watch-list/watch-list.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ContactComponent } from './shared/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'movies-list',
    loadComponent: () =>
      import('./features/movies-list/movies-list.component').then(
        (m) => m.MoviesListComponent
      ),
  },
  {
    path: 'watched',
    loadComponent: () =>
      import('./features/watched/watched.component').then(
        (m) => m.WatchedComponent
      ),
  },
  {
    path: 'watch-list',
    loadComponent: () =>
      import('./features/watch-list/watch-list.component').then(
        (m) => m.WatchListComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./shared/contact/contact.component').then(
        (c) => c.ContactComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
