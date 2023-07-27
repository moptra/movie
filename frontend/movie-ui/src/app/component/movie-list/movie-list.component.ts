import { Component } from '@angular/core';
import {Movie} from "../../model/movie.model";
import {MovieService} from "../../service/movie.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  movies: Movie [] = this.movieService.movies;

  constructor(private movieService: MovieService) {
  }

}
