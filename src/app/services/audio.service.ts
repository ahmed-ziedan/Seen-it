import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private actionSound = new Audio(
    '/assets/sounds/new-notification-07-210334.mp3'
  );
  constructor() {
    this.actionSound.load();
  }

  playSound() {
    this.actionSound.currentTime = 0;
    this.actionSound.play();
  }
}
