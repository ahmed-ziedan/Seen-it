import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WatchListService {
  private storageKey = 'watchList';
  private watchListSource = new BehaviorSubject<any>(
    this.getWatchListFromStorage()
  );

  public watchList$: Observable<any> = this.watchListSource.asObservable();
  constructor() {}

  private saveWatchListToStorage(movies: any) {
    localStorage.setItem(this.storageKey, JSON.stringify(movies));
  }

  private getWatchListFromStorage(): any {
    const watchListJson = localStorage.getItem(this.storageKey);
    return watchListJson ? JSON.parse(watchListJson) : [];
  }
  addToWatchList(movie: any) {
    const currentList = this.watchListSource.getValue();
    if (!currentList.find((m: { id: any }) => m.id === movie.id)) {
      const updatedList = [...currentList, movie];
      this.watchListSource.next(updatedList);
      this.saveWatchListToStorage(updatedList);
    }
  }

  removeFromWatchList(movieId: number) {
    const currentList = this.watchListSource.getValue();
    const updatedList = currentList.filter(
      (m: { id: number }) => m.id !== movieId
    );
    this.watchListSource.next(updatedList);
    this.saveWatchListToStorage(updatedList);
  }
}
