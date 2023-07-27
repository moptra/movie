import { Injectable } from '@angular/core';
import {Movie} from "../model/movie.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie [] = [
    {id: 1, title: "Rear Window", director: "Alfred Hitchcock", year: 1954},
    {id: 2, title: "Vertigo", director: "Alfred Hitchcock", year: 1958},
    {id: 3, title: "Psycho", director: "Alfred Hitchcock", year: 1960},
    {id: 4, title: "Birds", director: "Alfred Hitchcock", year: 1963}
  ]

  constructor() { }
}
