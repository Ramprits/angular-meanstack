import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/web-blog/src/environments/environment';
import { Observable } from 'rxjs';
const base_url = environment.api_url;
import * as _ from 'lodash';
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

  getUserById(id: string): Observable<any> {
    return this.http.get<any>(`${base_url}/api/getUsers/${id}`);
  }

  getUserByName(username: string): Observable<any> {
    return this.http.get<any>(`${base_url}/api/getUsers/${username}`);
  }

  followUser(userFollowed): Observable<any> {
    return this.http.post<any>(`${base_url}/api/friends`, { userFollowed });
  }

  unFollowUser(userFollowed): Observable<any> {
    return this.http.post<any>(`${base_url}/api/friends/unfollowUser`, {
      userFollowed
    });
  }

  MarkeNotification(Id, deleteValue?):Observable<any> {
    return this.http.post(`${base_url}/api/friends/mark/${Id}`, {
      Id,
      deleteValue
    });
  }
}
