import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {AuthService} from '@app/shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  // Formulaire de connexion
  public signinForm: FormGroup;

  public err: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {}

  ngOnInit() {
    // Initialisation du formulaire
    this.signinForm = this.fb.group({
      username: this.fb.control(''),
      password: this.fb.control('')
    });
  }

  /**
   * Se connecter
   */
  public trySignin(): void {
    console.log(this.signinForm.value);

    // Subscribe authService
    this.authService.signin(this.signinForm.value).subscribe(
      () => { this.router.navigate(['/']); },
      error => this.err = error
    );
  }
}
