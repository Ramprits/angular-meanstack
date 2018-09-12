import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '@myworkspace/core';
const cookie = environment.cookie;

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private cookieService: CookieService) {}

  SetToken(token) {
    this.cookieService.set(cookie, token);
  }
  GetToken() {
    return this.cookieService.get(cookie);
  }
  DeleteToken() {
    this.cookieService.delete(cookie);
  }
  DeleteAllToken() {
    this.cookieService.deleteAll(cookie);
  }

  GetPayLoad() {
    let token = this.GetToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = JSON.parse(window.atob(payload));
    } else {
      console.error('Token expire');
    }
    if (!payload) {
      console.log('Payload does not available');
    }
    return payload.data;
  }

  getUserName(): string {
    return this.GetPayLoad().username;
  }
  loggedIn() {
    return !!this.cookieService.get(cookie);
  }
}
