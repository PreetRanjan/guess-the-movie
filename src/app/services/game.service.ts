import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameSession } from '../models/GameSession';
import { Question } from '../models/Question';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}

  GetSessions() {
    return this.http.get<GameSession[]>(
      'https://guessthemovieapi.azurewebsites.net/api/GameSession'
    );
  }

  GetSessionById(sessionId) {
    return this.http.get<GameSession>(
      'https://guessthemovieapi.azurewebsites.net/api/GameSession/' + sessionId
    );
  }
}
