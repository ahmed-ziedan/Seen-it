// import { Component, OnInit } from '@angular/core';
// import { MoviesService } from '../services/movies.service';
// import { CommonModule } from '@angular/common';
// import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
// import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

// @Component({
//   selector: 'app-movies-list',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './movies-list.component.html',
//   styleUrl: './movies-list.component.scss',
// })
// export class MoviesListComponent implements OnInit {
//   movies: any[] = [];
//   searchInput = new FormControl('', Validators.required);

//   listTitle: string = 'Popular Movies';

//   constructor(private moviesService: MoviesService) {}

//   ngOnInit(): void {
//     this.loadPopularMovies();
//     this.listenToSearchInput();
//   }

//   loadPopularMovies(): void {
//     this.listTitle = 'Popular Movies';
//     this.moviesService.getPopularMovies().subscribe((response) => {
//       this.movies = response.results;
//     });
//   }
//   listenToSearchInput(): void {
//     this.searchInput.valueChanges
//       .pipe(
//         debounceTime(500),
//         distinctUntilChanged(),
//         switchMap((query) => this.moviesService.searchMovies(query || ''))
//       )
//       .subscribe((response) => {
//         if (this.searchInput.value) {
//           this.listTitle = `Search Results for:${this.searchInput.value}`;
//           this.movies = response.results;
//         } else {
//           this.loadPopularMovies();
//         }
//       });
//   }
//   watchedlist: number[] = [];

//   toggleWatchedlist(movie: any): void {
//     const movieId = movie.id;

//     if (this.isMovieInWatchedlist(movie)) {
//       this.watchedlist = this.watchedlist.filter((id) => id !== movieId);
//       console.log(`Removed movie ${movieId} from watchedlist.`);
//     } else {
//       this.watchedlist.push(movieId);
//       console.log(`Added movie ${movieId} to watchedlist.`);
//     }
//   }

//   isMovieInWatchedlist(movie: any): boolean {
//     return this.watchedlist.includes(movie.id);
//   }
// }
// src/app/movies-list/movies-list.component.ts

// src/app/movies-list/movies-list.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

// --- الخطوة 1: استيراد المكونات والخدمات التي تملكها فقط ---
import { MoviesService } from '../services/movies.service';
import { WatchedListService } from '../services/watched-list.service'; // استيراد خدمة المشاهدة
import { MovieCardComponent } from '../movie-card/movie-card.component'; // استيراد بطاقة الفيلم

@Component({
  selector: 'app-movies-list',
  standalone: true,
  // --- الخطوة 2: إضافة MovieCardComponent للـ imports ---
  imports: [CommonModule, ReactiveFormsModule, MovieCardComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
})
export class MoviesListComponent implements OnInit {
  movies: any[] = [];
  searchInput = new FormControl('', Validators.required);
  listTitle: string = 'Popular Movies';

  // --- الخطوة 3: حقن الخدمات التي تحتاجها فقط ---
  constructor(
    private moviesService: MoviesService,
    private watchedListService: WatchedListService // الآن نحن نحقن خدمة واحدة فقط
  ) {}

  ngOnInit(): void {
    this.loadPopularMovies();
    this.listenToSearchInput();

    // --- الخطوة 4: تأكد من حذف الكود المحلي القديم ---
    // احذف watchedlist: number[] = [];
    // احذف toggleWatchedlist(...)
    // احذف isMovieInWatchedlist(...)
    // يجب أن يكون هذا الجزء من الـ class فارغاً الآن
  }

  // دوال جلب الأفلام والبحث (تبقى كما هي)
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
