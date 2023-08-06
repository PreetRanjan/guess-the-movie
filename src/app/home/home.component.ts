import { Component } from '@angular/core';
import { GameSession } from '../models/GameSession';
import { GameService } from '../services/game.service';
import { delay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  active = 'top';
  gameSessions: GameSession[] = [];
  isLoading: boolean = true;
  currentDate = new Date();
  constructor(private gs: GameService, private router: Router) {
    delay(3000);
    gs.GetSessions().subscribe((sessions) => {
      this.gameSessions = sessions;
      // this.isLoading = false;
    });
  }
}
