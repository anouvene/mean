var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '@app/shared/services/auth.service';
import { Router } from '@angular/router';
var SigninComponent = /** @class */ (function () {
    function SigninComponent(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
    }
    SigninComponent.prototype.ngOnInit = function () {
        // Initialisation du formulaire
        this.signinForm = this.fb.group({
            username: this.fb.control(''),
            password: this.fb.control('')
        });
    };
    /**
     * Se connecter
     */
    SigninComponent.prototype.trySignin = function () {
        var _this = this;
        console.log(this.signinForm.value);
        // Subscribe authService
        this.authService.signin(this.signinForm.value).subscribe(function () { _this.router.navigate(['/']); }, function (error) { return _this.err = error; });
    };
    SigninComponent = __decorate([
        Component({
            selector: 'app-signin',
            templateUrl: './signin.component.html',
            styleUrls: ['./signin.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder,
            AuthService,
            Router])
    ], SigninComponent);
    return SigninComponent;
}());
export { SigninComponent };
//# sourceMappingURL=signin.component.js.map