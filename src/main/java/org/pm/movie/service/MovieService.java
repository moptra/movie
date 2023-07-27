package org.pm.movie.service;

import org.pm.movie.dto.MovieListItem;
import org.pm.movie.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class MovieService {
    private MovieRepository movieRepository;

    @Autowired
    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public List<MovieListItem> getAllMovies() {
        return this.movieRepository.findAll().stream().map(MovieListItem::new).collect(Collectors.toList());

    }
}
