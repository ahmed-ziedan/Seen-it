import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { WatchedListService } from '../services/watched-list.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-watched',
  standalone: true,
  imports: [CommonModule, MovieCardComponent, RouterLink],
  templateUrl: './watched.component.html',
  styleUrl: './watched.component.scss',
})
export class WatchedComponent {
  public watchedList$: Observable<any> | undefined;

  // 2. استخدام الـ constructor لـ "حقن" الخدمة
  constructor(private watchedListService: WatchedListService) {
    this.watchedList$ = this.watchedListService.watchedList$;
  }
}
