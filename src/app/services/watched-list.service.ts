import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WatchedListService {
  private storageKey = 'WatchedList';
  private watchedListSource = new BehaviorSubject<any>(
    this.getWatchedFromStorage()
  );

  public watchedList$: Observable<any> = this.watchedListSource.asObservable();

  constructor() {}

  private saveWatchedToStorage(movies: any) {
    localStorage.setItem(this.storageKey, JSON.stringify(movies));
  }

  private getWatchedFromStorage(): any {
    const watchedJson = localStorage.getItem(this.storageKey);
    return watchedJson ? JSON.parse(watchedJson) : [];
  }

  addToWatched(movie: any) {
    const currentList = this.watchedListSource.getValue();
    if (!currentList.find((m: { id: any }) => m.id === movie.id)) {
      const updatedList = [...currentList, movie];
      this.watchedListSource.next(updatedList);
      this.saveWatchedToStorage(updatedList);
    }
  }
  removeFromWatched(movieId: number) {
    const currentList = this.watchedListSource.getValue();
    const updatedList = currentList.filter(
      (m: { id: number }) => m.id !== movieId
    );
    this.watchedListSource.next(updatedList);
    this.saveWatchedToStorage(updatedList);
  }
}
