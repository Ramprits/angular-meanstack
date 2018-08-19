import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGenericRepository } from './IGenericRepository';
import { environment } from '../environments/environment';

const Base_Url = environment.api_url;
export abstract class NewsRepository<T, id>
  implements IGenericRepository<T, id> {
  constructor(private http: HttpClient) {}
  save(t: T): Observable<T> {
    throw new Error('Method not implemented.');
  }
  update(id: id, t: T): Observable<T> {
    throw new Error('Method not implemented.');
  }
  findOne(id: id): Observable<T> {
    throw new Error('Method not implemented.');
  }
  findAll(): Observable<T[]> {
    return this.http.get<T[]>(Base_Url);
  }
  delete(id: id): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
