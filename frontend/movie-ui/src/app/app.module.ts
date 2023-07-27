import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import { NavbarComponent } from './component/navbar/navbar/navbar.component';
import { CreateMovieComponent } from './component/create-movie/create-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailsComponent,
    NavbarComponent,
    CreateMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
