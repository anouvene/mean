var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
var AuthService = /** @class */ (function () {
    /**
     * HttpClient
     * @param http HttpClient service
     */
    function AuthService(http) {
        this.http = http;
        // Token
        this.jwtToken = new BehaviorSubject({
            isAuthenticated: null,
            token: null
        });
        this.initToken(); // Appel init token
    }
    /**
     * Inscription
     * Poster signupForm
     * @param user UserModel
     */
    AuthService.prototype.signup = function (user) {
        return this.http.post('/api/auth/signup', user);
    };
    /**
     * Connexion
     * Poster signinForm
     * @param credentials Identifiants utilisateur
     */
    AuthService.prototype.signin = function (credentials) {
        var _this = this;
        return this.http.post('/api/auth/signin', credentials).pipe(tap(function (token) {
            _this.jwtToken.next({
                isAuthenticated: true,
                token: token
            });
            localStorage.setItem('jwt', token); // stoker localement le token pour une durée limitée
        }));
    };
    /**
     * Initialiser le token
     */
    AuthService.prototype.initToken = function () {
        var token = localStorage.getItem('jwt');
        if (token) {
            this.jwtToken.next({
                isAuthenticated: true,
                token: token
            });
        }
        else {
            this.jwtToken.next({
                isAuthenticated: false,
                token: null
            });
        }
    };
    AuthService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map