import { Component } from '@angular/core';
import {AuthService} from '@app/shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // Injection au plus haut niveau le service authentification
  // pour qu'il soit dispo. dès le chargement de l'appli.
  constructor(private authService: AuthService) {}
}
