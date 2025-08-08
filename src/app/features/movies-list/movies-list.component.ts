import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { MoviesService } from '../../services/movies.service';
import { WatchedListService } from '../../services/watched-list.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MovieCardComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
})
export class MoviesListComponent implements OnInit {
  movies: any[] = [];
  searchInput = new FormControl('', Validators.required);
  listTitle: string = 'Popular Movies';

  constructor(
    private moviesService: MoviesService
  ) // private watchedListService: WatchedListService
  {}

  ngOnInit(): void {
    this.loadPopularMovies();
    this.listenToSearchInput();
  }

  loadPopularMovies(): void {
    this.listTitle = 'Popular Movies';
    this.moviesService.getPopularMovies().subscribe((response) => {
      this.movies = response.results;
    });
  }

  listenToSearchInput(): void {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((query) => this.moviesService.searchMovies(query || ''))
      )
      .subscribe((response) => {
        if (this.searchInput.value) {
          this.listTitle = `Search Results for: ${this.searchInput.value}`;
          this.movies = response.results;
        } else {
          this.loadPopularMovies();
        }
      });
  }
}
