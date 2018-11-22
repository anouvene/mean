// Modules natifs
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomepageComponent } from '@app/homepage/homepage.component';

// Les routes pour les components
const ROUTES: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', loadChildren: '@app/login/login.module#LoginModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
