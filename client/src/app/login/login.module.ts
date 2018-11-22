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

@NgModule({
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
export class LoginModule { }
