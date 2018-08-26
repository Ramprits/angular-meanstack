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
import { TokenService } from '@myworkspace/core/services/token-service/token.service';
import { ToastrService } from 'ngx-toastr';
import * as io from 'socket.io-client';
import { environment } from '../../../../apps/web-blog/src/environments/environment';
const base_url = environment.api_url;

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent extends BaseComponent implements OnInit {
  loginForm: FormGroup;
  socket: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService,
    private ts: ToastrService
  ) {
    super();
    this.socket = io(base_url);
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
      data => {
        if (data) {
          this.loginForm.reset();
          this.tokenService.SetToken(data.token);
          this.socket.emit('refresh', {});
          this.router.navigateByUrl('');
        }
      },
      err => {
        if (err.error.message) {
          this.ts.error(err.error.message);
        }
      }
    );
  }
}
