package org.pm.movie.dto;

import jakarta.persistence.Column;
import org.pm.movie.domain.Movie;

public class MovieListItem {
    private Long id;
    private String title;
    private String director;
    private Long year;

    public MovieListItem() {
    }

    public MovieListItem(Movie movie) {
        this.id = movie.getId();
        this.title = movie.getTitle();
        this.director = movie.getDirector();
        this.year = movie.getYear();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public Long getYear() {
        return year;
    }

    public void setYear(Long year) {
        this.year = year;
    }
}
