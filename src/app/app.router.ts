import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {MovieComponent} from './movie/movie.component';

export const router: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movie/:id', component: MovieComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
