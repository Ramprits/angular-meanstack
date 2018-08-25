import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'apps/web-blog/src/environments/environment';
import { Observable } from 'rxjs';
import { PostRepository } from '../../../../../../libs/core/services/PostRepository';

const base_url = environment.api_url + `/api/posts`;
@Injectable({
  providedIn: 'root'
})
export class PostService extends PostRepository<any, string> {
  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  addPost(body: any): Observable<any> {
    return this.httpClient.post<any>(base_url, body);
  }

 
}
