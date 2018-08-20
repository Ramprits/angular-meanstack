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
}
