import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGenericRepository } from './IGenericRepository';
import { environment } from '../environments/environment';

const Base_Url = environment.app_url + '/api/posts';
export abstract class PostRepository<T, id>
  implements IGenericRepository<T, id> {
  constructor(private http: HttpClient) {}
  save(t: T): Observable<T> {
    return this.http.post<T>(Base_Url, t);
  }

  addLike(t: T): Observable<T> {
    return this.http.post<T>(Base_Url + '/addLikes', t);
  }

  addComment(postId: any, comment: any): Observable<any> {
    return this.http.post<any>(Base_Url + '/addComment', {
      postId,
      comment
    });
  }
  update(id: id, t: T): Observable<T> {
    throw new Error('Method not implemented.');
  }
  findOne(id: id): Observable<T> {
    return this.http.get<T>(Base_Url + '/' + id);
  }
  findAll(): Observable<{ message: string; posts: T[] }> {
    return this.http.get<{ message: string; posts: T[] }>(Base_Url);
  }
  delete(id: id): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
