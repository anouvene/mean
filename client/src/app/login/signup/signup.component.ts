import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from '@app/shared/services/auth.service';
import { Router } from '@angular/router';
import { UserModel } from '@app/shared/models/user.model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;
  public error: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: [''],
      email: [''],
      password: ['']
    });
  }

  /**
   * Get signin form value
   */
  public trySignup(): void {
    console.log(this.signupForm.value);

    // Post signup form and subscribe to auth service
    this.authService.signup(this.signupForm.value).subscribe( (user: UserModel) => {
      // Go to signin page if success
      this.router.navigate(['/signin']);
    }, err => {
      // Post signup form error
      this.error = err;
      console.log(this.error);
    });
  }
}
