import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@myworkspace/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { AuthService } from '@myworkspace/core/services/auth/auth.service';
import { Router } from '@angular/router';
import { AuthModel } from '@myworkspace/core/model/auth.model';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent extends BaseComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  getUserNameErrorMessage() {
    return this.registerForm.get('username').hasError('required')
      ? 'You must enter a username'
      : '';
  }
  getEmailErrorMessage() {
    return this.registerForm.get('email').hasError('required')
      ? 'You must enter a email'
      : '';
  }

  getPasswordErrorMessage() {
    return this.registerForm.get('password').hasError('required')
      ? 'You must enter a password'
      : '';
  }

  onSubmit(registerData: AuthModel) {
    console.log(registerData);
    this.authService.register(registerData).subscribe(
      () => {
        this.router.navigate(['/home']);
      },
      err => {
        if (err.error.msg) {
          this.errorMessage = err.error.msg[0].message;
        }
        if (err.error.message) {
          this.errorMessage = err.error.message;
        }
      }
    );
  }
}