import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserModel } from '@app/shared/models/user.model';
import { JwtTokenModel } from '@app/shared/models/jwt-token.model';

import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Token
  public jwtToken: BehaviorSubject<JwtTokenModel> = new BehaviorSubject({
    isAuthenticated: null,
    token: null
  });

  /**
   * HttpClient
   * @param http HttpClient service
   */
  constructor(private http: HttpClient) {
    this.initToken(); // Appel init token
  }

  /**
   * Inscription
   * Poster signupForm
   * @param user UserModel
   */
  public signup(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>('/api/auth/signup', user);
  }

  /**
   * Connexion
   * Poster signinForm
   * @param credentials Identifiants utilisateur
   */
  public signin(credentials: {email: string, password: string}): Observable<string> {
    return this.http.post<string>('/api/auth/signin', credentials).pipe(
      tap((token: string) => {
        this.jwtToken.next({
          isAuthenticated: true,
          token: token
        });
        localStorage.setItem('jwt', token); // stoker localement le token pour une durée limitée
      })
    );
  }

  /**
   * Initialiser le token
   */
  private initToken(): void {
    const token = localStorage.getItem('jwt');

    if (token) {
      this.jwtToken.next({
        isAuthenticated: true,
        token: token
      });
    } else {
      this.jwtToken.next({
        isAuthenticated: false,
        token: null
      });
    }
  }

}
