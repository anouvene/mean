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
var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this.fb.group({
            username: [''],
            email: [''],
            password: ['']
        });
    };
    /**
     * Get signin form value
     */
    SignupComponent.prototype.trySignup = function () {
        var _this = this;
        console.log(this.signupForm.value);
        // Post signup form and subscribe to auth service
        this.authService.signup(this.signupForm.value).subscribe(function (user) {
            // Go to signin page if success
            _this.router.navigate(['/signin']);
        }, function (err) {
            // Post signup form error
            _this.error = err;
            console.log(_this.error);
        });
    };
    SignupComponent = __decorate([
        Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder,
            AuthService,
            Router])
    ], SignupComponent);
    return SignupComponent;
}());
export { SignupComponent };
//# sourceMappingURL=signup.component.js.map