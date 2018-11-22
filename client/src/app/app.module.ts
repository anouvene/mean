// Modules natifs
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { LayoutModule } from '@app/shared/modules/layout/layout.module';
import { AppRoutingModule } from '@app/app.routing.module';

// Components
import { AppComponent } from '@app/app.component';
import { HomepageComponent } from '@app/homepage/homepage.component';
import { TopbarComponent } from '@app/shared/components/topbar/topbar.component';

// Services
import { AuthService } from '@app/shared/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
