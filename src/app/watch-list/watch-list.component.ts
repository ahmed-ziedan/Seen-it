import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Observable } from 'rxjs';
import { WatchListService } from '../services/watch-list.service';

@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.scss',
})
export class WatchListComponent {
  public watchList$: Observable<any> | undefined;

  // 2. استخدام الـ constructor لـ "حقن" الخدمة
  constructor(private watchListService: WatchListService) {
    this.watchList$ = this.watchListService.watchList$;
  }
}
