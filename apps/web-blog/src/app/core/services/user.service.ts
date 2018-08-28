import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/web-blog/src/environments/environment';
import { Observable } from 'rxjs';
const base_url = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<{ message: string; users: any[] }> {
    return this.http.get<{ message: string; users: any[] }>(
      `${base_url}/api/getUsers`
    );
  }

  followUser(id): Observable<any> {
    return this.http.post<any>(`${base_url}/api/friends`, { userFollowed: id });
  }
}
