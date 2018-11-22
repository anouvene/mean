var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modules natifs
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// Modules
import { LayoutModule } from '@app/shared/modules/layout/layout.module';
import { LoginRoutingModule } from '@app/login/login-routing.module';
// Components
// import { SigninComponent } from '@app/login/signin/signin.component';
// import { SignupComponent } from '@app/login/signup/signup.component';
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        NgModule({
            declarations: [
                LoginRoutingModule.components
                // SigninComponent,
                // SignupComponent
            ],
            imports: [
                CommonModule,
                LayoutModule,
                ReactiveFormsModule,
                LoginRoutingModule
            ]
        })
    ], LoginModule);
    return LoginModule;
}());
export { LoginModule };
//# sourceMappingURL=login.module.js.map