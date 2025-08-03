import { Component, Input, OnInit } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { WatchedListService } from '../services/watched-list.service';
import { CommonModule } from '@angular/common';
import { WatchListService } from '../services/watch-list.service';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: any;

  public isWatched$!: Observable<boolean>;
  public isWatchList$!: Observable<boolean>;

  constructor(
    private watchedListService: WatchedListService,
    private watchListService: WatchListService
  ) {}

  ngOnInit(): void {
    this.isWatched$ = this.watchedListService.watchedList$.pipe(
      map((watchedList: any[]) =>
        watchedList.some((watchedMovie) => watchedMovie.id === this.movie.id)
      )
    );

    this.isWatchList$ = this.watchListService.watchList$.pipe(
      map((watchList: any[]) =>
        watchList.some((movieInList) => movieInList.id === this.movie.id)
      )
    );
  }
  toggleWatchedStatus() {
    this.isWatched$.pipe(take(1)).subscribe((isWatched) => {
      if (isWatched) {
        this.watchedListService.removeFromWatched(this.movie.id);
      } else {
        this.watchedListService.addToWatched(this.movie);
      }
    });
  }

  toggleWatchlistStatus() {
    this.isWatchList$.pipe(take(1)).subscribe((isWatchList) => {
      if (isWatchList) {
        this.watchListService.removeFromWatchList(this.movie.id);
      } else {
        this.watchListService.addToWatchList(this.movie);
      }
    });
  }
}
