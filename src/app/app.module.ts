import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule, MatAutocompleteModule, MatOptionModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {MovieComponent} from './movie/movie.component';
import {HomeComponent} from './home/home.component';
import {routes} from './app.router';
import {MoviesService} from './service/movies.service';
import {SearchComponent} from './search/search.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    HomeComponent,
    SearchComponent,
    SearchHistoryComponent,
    FavoritesComponent
  ],
  imports: [
    MatFormFieldModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    routes,
    HttpClientModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
