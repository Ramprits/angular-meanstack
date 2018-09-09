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
import { TokenService } from '@myworkspace/core/services/token-service/token.service';

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
    private router: Router,
    private tokenService: TokenService
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

  onSubmit(registerData: AuthModel) {
    this.authService.register(registerData).subscribe(
      data => {
        this.tokenService.SetToken(data.token);
        this.registerForm.reset();
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
