import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@myworkspace/core/base';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@myworkspace/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent extends BaseComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  getEmailErrorMessage() {
    return this.loginForm.get('username').hasError('required')
      ? 'You must enter a username'
      : '';
  }

  getPasswordErrorMessage() {
    return this.loginForm.get('password').hasError('required')
      ? 'You must enter a password'
      : '';
  }

  onSubmit(loginData: any) {
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(loginData).subscribe(
      response => {
        this.router.navigate(['/home']);
      },
      err => {
        if (err.error.message) {
          console.log(err.error.message);
        }
      }
    );
  }
}
