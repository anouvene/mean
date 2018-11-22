import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from '@app/login/signin/signin.component';
import { SignupComponent } from '@app/login/signup/signup.component';

const ROUTES: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule {
  static components = [
    SigninComponent,
    SignupComponent
  ];
}
