import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { AuthModel, LoginModel } from '../../model/auth.model';
import { environment } from '@myworkspace/core/environments/environment';

const base_url = environment.app_url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  register(data: AuthModel) {
    return this.httpClient
      .post<{ message: string; auth: AuthModel; token: string }>(
        base_url + `/api/users/register`,
        data
      )
      .pipe(
        tap(data => {
        })
      );
  }

  login(data: LoginModel) {
    return this.httpClient
      .post<{ message: string; auth: LoginModel; token: string }>(
        base_url + `/api/users/login`,
        data
      )
      .pipe(
        tap(data => {
        })
      );
  }
}
